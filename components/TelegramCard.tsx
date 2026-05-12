/**
 * Telegram Card
 * Repository: https://github.com/Shineii86/Telegram-Card
 * Author: Shinei Nouzen
 * Copyright (c) 2026 Shinei Nouzen — MIT License
 */

import type { ScrapeResult, CardThemeOptions } from '@/types/enums';

interface CardProps {
  result: ScrapeResult;
  theme: CardThemeOptions;
  isDark: boolean;
}

/** Verified-badge SVG (inline so @vercel/og can rasterise it) */
function VerifiedBadge() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 26 26"
      style={{ marginLeft: 8, verticalAlign: -4, flexShrink: 0 }}
    >
      <path d="m6 6h12v12h-12z" fill="#fff" />
      <path
        clipRule="evenodd"
        d="m14.38 1.51 1.82 1.82c.37.37.86.57 1.38.57h2.57c1.01 0 1.85.77 1.94 1.76l.01.19v2.57c0 .52.21 1.01.57 1.38l1.82 1.82c.71.71.76 1.84.13 2.61l-.13.15-1.82 1.82c-.37.37-.57.86-.57 1.38v2.57c0 1.01-.77 1.85-1.76 1.94l-.19.01h-2.57c-.52 0-1.01.21-1.38.57l-1.82 1.82c-.71.71-1.84.76-2.61.13l-.15-.13-1.82-1.82c-.37-.37-.86-.57-1.38-.57h-2.57c-1.01 0-1.85-.77-1.94-1.76l-.01-.19v-2.57c0-.52-.21-1.01-.57-1.38l-1.82-1.82c-.71-.71-.76-1.84-.13-2.61l.13-.15 1.82-1.82c.37-.37.57-.86.57-1.38v-2.57c0-1.08.87-1.95 1.95-1.95h2.57c.52 0 1.01-.21 1.38-.57l1.82-1.82c.76-.76 2-.76 2.76 0zm3.2 8.05c-.43-.34-1.03-.31-1.42.06l-.1.11-4.45 5.56-1.75-1.75-.11-.1c-.42-.32-1.03-.29-1.42.1s-.42.99-.1 1.42l.1.11 2.6 2.6.11.1c.42.32 1.02.29 1.4-.08l.1-.11 5.2-6.5.08-.12c.27-.46.17-1.05-.25-1.4z"
        fill="#1c93e3"
        fillRule="evenodd"
      />
    </svg>
  );
}

/** Main card layout — avatar + name + metadata */
export function TelegramCard({ result, theme, isDark }: CardProps) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.bgColor,
          padding: '32px 40px',
          borderRadius: '24px',
          width: '600px',
          height: '180px',
          boxShadow: `0 12px 28px ${theme.shadowColor}`,
          color: theme.textColor,
          fontFamily: theme.fontFamily,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Avatar */}
        <div
          style={{
            position: 'relative',
            width: 110,
            height: 110,
            marginRight: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={result.image ?? undefined}
            alt={`${result.username} profile picture`}
            width={120}
            height={120}
            style={{ borderRadius: 9999, objectFit: 'cover' }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Title row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', maxWidth: '380px' }}>
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  fontFamily: 'Arial',
                  letterSpacing: '-0.5px',
                }}
              >
                {result.title}
              </span>
              {result.isVerified && <VerifiedBadge />}
            </div>
          </div>

          {/* Username */}
          <span
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: theme.subtleTextColor,
              display: 'flex',
              alignItems: 'center',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              maxWidth: '380px',
            }}
          >
            @{result.username}
          </span>

          {/* Extra info */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontSize: 22,
                fontWeight: 500,
                color: theme.extraColor,
                display: 'flex',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                maxWidth: '360px',
              }}
            >
              {result.extra}
            </span>
          </div>
        </div>

        {/* Corner gradient accent */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '120px',
            height: '120px',
            borderRadius: '100% 0 0 0',
            background: isDark
              ? 'radial-gradient(circle at 100% 100%, rgba(0,136,204,0.1), transparent 70%)'
              : 'radial-gradient(circle at 100% 100%, rgba(0,136,204,0.05), transparent 70%)',
            zIndex: 0,
          }}
        />
      </div>
    </div>
  );
}

/** Error fallback card */
export function ErrorCard({ message, isDark = false }: { message: string; isDark?: boolean }) {
  const bg = isDark ? 'rgba(42, 42, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
  const textColor = isDark ? '#FFFFFF' : '#333333';
  const subtleColor = isDark ? '#AAAAAA' : '#666666';
  const shadow = isDark ? '0 16px 40px rgba(0,0,0,0.4)' : '0 16px 40px rgba(0,0,0,0.15)';
  const accentColor = isDark ? '#8DD5FF' : '#0088CC';

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: bg,
          padding: '32px 40px',
          borderRadius: '24px',
          width: '600px',
          boxShadow: shadow,
          fontFamily: 'Inter, sans-serif',
          color: textColor,
          gap: '16px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM17.568 8.16C17.388 10.056 16.608 14.664 16.212 16.788C16.044 17.688 15.708 17.988 15.396 18.024C14.7 18.084 14.172 17.568 13.5 17.124C12.444 16.428 11.844 16.02 10.824 15.336C9.636 14.544 10.404 14.112 11.088 13.416C11.268 13.236 14.34 10.44 14.4 10.188C14.412 10.152 14.412 10.044 14.352 9.996C14.292 9.948 14.208 9.96 14.136 9.972C14.04 9.984 12.24 11.184 8.76 13.548C8.304 13.848 7.884 13.992 7.512 13.98C7.104 13.968 6.312 13.74 5.724 13.548C5.004 13.308 4.428 13.18 4.476 12.78C4.5 12.576 4.788 12.36 5.34 12.144C9.06 10.32 11.58 9.108 12.876 8.496C16.5 6.768 17.304 6.456 17.82 6.456C17.928 6.456 18.18 6.48 18.336 6.636C18.456 6.756 18.492 6.912 18.504 7.032C18.516 7.104 18.528 7.296 18.516 7.464C18.504 7.608 17.568 8.16 17.568 8.16Z"
            fill={accentColor}
          />
        </svg>
        <span style={{ fontSize: 24, fontWeight: 600 }}>Unable to load Telegram profile</span>
        <span style={{ fontSize: 16, color: subtleColor, textAlign: 'center' }}>{message}</span>
        {/* Corner gradient accent */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: '120px',
            height: '120px',
            borderRadius: '100% 0 0 0',
            background: isDark
              ? 'radial-gradient(circle at 100% 100%, rgba(0,136,204,0.1), transparent 70%)'
              : 'radial-gradient(circle at 100% 100%, rgba(0,136,204,0.05), transparent 70%)',
            zIndex: 0,
          }}
        />
      </div>
    </div>
  );
}
