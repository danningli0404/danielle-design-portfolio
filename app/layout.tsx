import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://danielle-li-design-engineer.dli05.chatgpt.site'),
  title: '李丹宁 Danielle Li — 设计工程',
  icons: { icon: '/favicon.svg' },
  description: '李丹宁的产品设计与实体制作作品集。以 Calm & Control 为设计价值，通过材料、制造与原型迭代回应日常问题。',
  openGraph: { title: 'Danielle Li — Design Engineer', description: 'Calm & Control through product design, fabrication, and physical prototyping.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Danielle Li — Design Engineer', description: 'Product design and physical making for everyday life.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
