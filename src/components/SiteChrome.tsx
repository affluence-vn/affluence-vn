import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoMark from "../assets/logo-mark.png";
import { TelegramIcon, ZaloIcon } from "./FloatingContact";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logoMark}
        alt="Affluence logo"
        width={28}
        height={28}
        fetchPriority="high"
        decoding="async"
        className="h-7 w-7 object-contain"
      />

      <span className="text-[17px] font-extrabold tracking-tight">Affluence</span>
    </div>
  );
}

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[62px] max-w-6xl items-center justify-between px-6">
        <Link to="/" aria-label="Trang chủ Affluence">
          <Logo />
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          <a href="/#su-menh" className="text-[13px] font-semibold text-ink-soft hover:text-ink">
            Sứ mệnh
          </a>
          <a href="/#hoat-dong" className="text-[13px] font-semibold text-ink-soft hover:text-ink">
            Chúng tôi làm gì
          </a>
          <a href="/#team" className="text-[13px] font-semibold text-ink-soft hover:text-ink">
            Đội ngũ
          </a>
          <Link to="/blog" className="text-[13px] font-semibold text-ink-soft hover:text-ink">
            Blog
          </Link>
          <a href="/#lien-he" className="text-[13px] font-semibold text-ink-soft hover:text-ink">
            Liên hệ
          </a>
        </div>
        <a
          href="/#lien-he"
          className="inline-flex items-center gap-1.5 rounded-full bg-grad-brand px-5 py-2 text-[13px] font-bold text-white shadow-lift transition-transform hover:-translate-y-0.5"
        >
          Hợp tác ngay
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-ink-soft">
            Agency performance marketing chuyên sâu trong lĩnh vực giáo dục Việt Nam.
          </p>
          <Link
            to="/blog"
            className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline"
          >
            Blog kiến thức giáo dục
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-mute">Liên hệ</p>
          <a
            href="mailto:Hello@affluence.vn"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 shrink-0" />
            Hello@affluence.vn
          </a>
          <a
            href="tel:+84869688153"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4 shrink-0" />
            Hotline: 0869 688 153 (08:00 – 17:30, hằng ngày)
          </a>
          <a
            href="https://zalo.me/0869688153"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <ZaloIcon className="h-4 w-4 shrink-0" />
            Zalo: 0869 688 153 (Hỗ trợ 24/7)
          </a>
          <a
            href="https://t.me/Uyenadc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <TelegramIcon className="h-4 w-4 shrink-0" />
            Telegram: @Uyenadc
          </a>
          <a
            href="https://www.linkedin.com/in/vuongnm/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 flex items-center gap-2 text-[13px] font-medium text-ink-soft transition-colors hover:text-primary"
          >
            <Linkedin className="h-4 w-4 shrink-0" />
            linkedin.com/in/vuongnm
          </a>
        </div>
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ink-mute">Địa chỉ</p>
          <p className="flex items-start gap-2 text-[13px] leading-relaxed text-ink-soft">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            166/2D Đ. Trần Văn Dư, Tân Bình, Hồ Chí Minh 70000, Vietnam
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-[13px] text-ink-mute">
          © {new Date().getFullYear()} Affluence. Bản quyền thuộc về Affluence Vietnam.
        </div>
      </div>
    </footer>
  );
}
