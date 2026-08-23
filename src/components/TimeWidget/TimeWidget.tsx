import { useEffect, useState } from 'react';
import styles from './TimeWidget.module.css';

const BANGALORE_TZ = 'Asia/Kolkata';
const imgBezel = '/assets/v2/clock/bezel.svg';
const imgFace = '/assets/v2/clock/face.svg';
const imgSecondTip = '/assets/v2/clock/second-tip.svg';
const imgHubOuter = '/assets/v2/clock/hub-outer.svg';
const imgHub = '/assets/v2/clock/hub.svg';

type ClockTime = {
  hour: number;
  minute: number;
  second: number;
  digital: string;
};

function getBangaloreTime(now: Date): ClockTime {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: BANGALORE_TZ,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now);

  const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? '0');
  const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? '0');
  const second = Number(parts.find((part) => part.type === 'second')?.value ?? '0');
  const hour12 = hour % 12 || 12;

  return {
    hour,
    minute,
    second,
    digital: `${String(hour12).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`,
  };
}

function AnalogFace({ hour, minute, second }: Omit<ClockTime, 'digital'>) {
  const hourAngle = ((hour % 12) + minute / 60 + second / 3600) * 30;
  const minuteAngle = (minute + second / 60) * 6;
  const secondAngle = second * 6;

  return (
    <div className={styles.analog} aria-hidden="true">
      <div className={styles.analogInner}>
        <img className={styles.bezel} src={imgBezel} alt="" />
        <img className={styles.faceDisk} src={imgFace} alt="" />
        {Array.from({ length: 12 }, (_, index) => (
          <span
            key={index}
            className={styles.tickPivot}
            style={{ transform: `rotate(${index * 30}deg)` }}
          >
            <span className={styles.tick} />
          </span>
        ))}
        <span className={`${styles.num} ${styles.num12}`}>12</span>
        <span className={`${styles.num} ${styles.num3}`}>3</span>
        <span className={`${styles.num} ${styles.num6}`}>6</span>
        <span className={`${styles.num} ${styles.num9}`}>9</span>
        <span className={styles.handPivot} style={{ transform: `rotate(${hourAngle}deg)` }}>
          <span className={styles.hourHand} />
        </span>
        <span className={styles.handPivot} style={{ transform: `rotate(${minuteAngle}deg)` }}>
          <span className={styles.minuteHand} />
        </span>
        <span className={styles.handPivot} style={{ transform: `rotate(${secondAngle}deg)` }}>
          <span className={styles.secondHand} />
          <img className={styles.secondTip} src={imgSecondTip} alt="" />
        </span>
        <img className={styles.hubOuter} src={imgHubOuter} alt="" />
        <img className={styles.hub} src={imgHub} alt="" />
      </div>
    </div>
  );
}

export function TimeWidget() {
  const [time, setTime] = useState(() => getBangaloreTime(new Date()));

  useEffect(() => {
    const tick = () => setTime(getBangaloreTime(new Date()));
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={styles.widget} aria-label={`Time in Bangalore ${time.digital}`}>
      <AnalogFace hour={time.hour} minute={time.minute} second={time.second} />
      <div className={styles.meta}>
        <div className={styles.metaTop}>
          <p className={styles.zone}>TIME ZONE • IST</p>
          <p className={styles.city}>Time in Bangalore</p>
        </div>
        <p className={styles.digital} aria-live="polite">
          {time.digital}
        </p>
      </div>
    </div>
  );
}
