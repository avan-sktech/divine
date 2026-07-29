import { useEffect, useRef } from 'react';

/**
 * Decorative editorial video.
 *
 * Plays only while in view and only when the visitor has not asked for
 * reduced motion, so it never competes with the hero video for bandwidth.
 * The poster image is the low-bandwidth and reduced-motion fallback.
 */
interface EditorialVideoProps {
  src: string;
  poster: string;
  className?: string;
}

const EditorialVideo = ({ src, poster, className = '' }: EditorialVideoProps) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.18, rootMargin: '120px 0px' },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default EditorialVideo;
