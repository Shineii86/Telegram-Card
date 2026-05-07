/**
 * Telegram Card
 * Repository: https://github.com/Shineii86/Telegram-Card
 * Author: Shinei Nouzen
 * Copyright (c) 2026 Shinei Nouzen — MIT License
 */

import { SourceType } from '@/types/enums';

function extractTextContent(doc: Document, selector: string): string | null {
  return doc.querySelector(selector)?.textContent?.trim() || null;
}

export function determineSourceType(doc: Document): SourceType {
  const btnTxt = extractTextContent(doc, 'a.tgme_action_button_new')?.toLowerCase();
  const contextLinkText = extractTextContent(doc, 'a.tgme_page_context_link');

  if (contextLinkText) return SourceType.Channel;
  if (btnTxt?.includes('start')) return SourceType.Bot;
  if (btnTxt?.includes('view')) return SourceType.Group;
  if (btnTxt?.includes('send')) return SourceType.User;

  return SourceType.Unknown;
}

export function extractExtraInfo(doc: Document, type: SourceType): string | null {
  const extraElements = doc.querySelectorAll('div.tgme_page_extra');

  if (type === SourceType.Bot) {
    return extraElements.length > 1 ? extraElements[1]?.textContent?.trim() || null : null;
  }
  if (type === SourceType.User) return 'User Account';

  return extraElements[0]?.textContent?.trim() || null;
}

export function extractTitle(doc: Document): string | null {
  const titleElement = doc.querySelector('div.tgme_page_title');
  if (!titleElement) return null;

  const titleSpan = titleElement.querySelector('span[dir="auto"]');
  if (titleSpan) return titleSpan.textContent?.trim() || null;

  const fullText = titleElement.textContent?.trim();
  if (!fullText) return null;

  return fullText.replace(/[✔✓☑]/g, '').trim();
}

export function extractDescription(doc: Document): string | null {
  return extractTextContent(doc, 'div.tgme_page_description');
}

export function extractImage(doc: Document): string | null {
  return doc.querySelector('img.tgme_page_photo_image')?.getAttribute('src') || null;
}

export function extractVerifiedStatus(doc: Document): boolean {
  return doc.querySelector('div.tgme_page_title i.verified-icon') !== null;
}
