import type { ImgHTMLAttributes } from 'react';

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export function OptimizedImage({
  priority = false,
  loading,
  decoding = 'async',
  fetchPriority,
  ...props
}: OptimizedImageProps) {
  return (
    <img
      {...props}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding}
      fetchPriority={fetchPriority ?? (priority ? 'high' : undefined)}
    />
  );
}
