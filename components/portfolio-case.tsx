/* The case studies continue the original homepage's material landscape, cream and ochre. */
@font-face{font-family:'Portfolio Cormorant';font-style:normal;font-weight:400;font-display:swap;src:url('/fonts/cormorant-regular.ttf') format('truetype')}
@font-face{font-family:'Portfolio Cormorant';font-style:italic;font-weight:400;font-display:swap;src:url('/fonts/cormorant-italic.ttf') format('truetype')}
.case-editorial{--paper:#f5f1e8;--ink:#203129;--muted:#58645b;--accent:#75601b;--surface:#ebe7db;--line:#3447392b;--font-serif:'Portfolio Cormorant','Songti SC','STSong',serif;background:var(--paper);color:var(--ink);max-width:none;margin:0;overflow:clip}
.case-editorial ::selection{background:#e5c94f;color:#17261f}
.case-masthead{position:relative;isolation:isolate;overflow:hidden;background:#bdc6c5;border-radius:26px 26px 0 0;margin:10px 10px 0}
.case-masthead::before{content:'';position:absolute;inset:0;z-index:-2;background:url('/atmosphere/material-landscape-v2.png') center 56%/cover no-repeat;filter:saturate(.72) contrast(.9)}
.case-masthead::after{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(100deg,#f5f1e8e8 0%,#f5f1e8b3 53%,#d9ded645 100%)}
.case-editorial .project-nav{margin:0 4%;height:88px;border-bottom:1px solid #24392b30;color:#203129;font-size:13px}
.case-editorial .project-nav .case-brand{justify-self:center;font:30px/1 var(--font-serif);gap:12px}
.case-brand>span{font:14px/1.4 'Songti SC','STSong',serif;letter-spacing:.12em}
.case-editorial .project-nav-actions{gap:25px}
.case-editorial .language-switch a{color:#25372f;min-width:40px;min-height:38px}
.case-editorial .language-switch a[aria-current=true]{background:#d7bd47;border-radius:999px;color:#17261f}
.case-editorial .language-switch a[aria-current=true]::after{display:none}
.case-editorial .project-hero{padding:68px 7% 64px;gap:24px 8%;grid-template-columns:1.5fr 1fr;min-height:440px}
.case-editorial .project-hero>.eyebrow{color:#4f5e53;font-size:12px;letter-spacing:.12em;margin:0}
.case-editorial .project-hero h1{font:400 clamp(68px,9.5vw,148px)/.92 var(--font-serif);letter-spacing:-.055em;color:#17261f;margin:0 0 10px;overflow-wrap:anywhere}
.case-editorial .project-summary{font:25px/1.6 var(--font-serif);max-width:720px;margin:0;color:#283d31;letter-spacing:0}
.case-editorial[lang=zh-CN] .project-summary{font:300 21px/1.9 'Songti SC','STSong',serif;letter-spacing:.015em}
.case-editorial .project-facts{margin:0;padding-left:28px;border-left:1px solid #273d3030;gap:18px}
.case-editorial .project-facts p{font-size:13px;line-height:1.8;color:#334a3b}
.case-editorial .project-facts strong{font-size:10px;letter-spacing:.09em;color:#52644f}
.case-editorial .project-context{margin:0 8%;padding:42px 0 36px;border:0;border-bottom:1px solid var(--line)}
.case-editorial .project-context dl{gap:8%;grid-template-columns:1.3fr 1fr}
.case-editorial .project-context dt{font-size:11px;letter-spacing:.1em;color:#53624e}
.case-editorial .project-context dd{font-size:15px;line-height:1.9;color:#4c5c50;max-width:700px}
.case-editorial .evidence-source{color:#69735e;font-size:11px}
.case-editorial .evidence-source a{border-color:#a68d3466;color:#5e542d}
.case-editorial .chapter-nav{margin:0 8%;padding:22px 0 30px;border:0;justify-content:flex-start;align-items:center;gap:10px;font-size:12px}
.case-editorial .chapter-nav a{border:1px solid #52624838;border-radius:999px;padding:8px 17px;transition:background .15s}
.case-editorial .chapter-nav a:hover{background:#e5c94f;color:#17261f;border-color:#b59e36}
.case-editorial .chapter-nav>span{font:italic 16px var(--font-serif);color:#68745e}
.case-editorial .project-cover,.case-editorial .process-spread{background:#faf8f1;margin:0 5% 28px;padding:22px;border-radius:14px}
.case-editorial .project-cover img,.case-editorial .process-spread img{border-radius:6px;max-height:800px;object-fit:contain}
.case-editorial .project-cover figcaption,.case-editorial .process-spread figcaption{font-size:11px;color:#68745e;margin-top:14px}
.case-editorial .case-grid{margin:0 8%;padding:80px 0;grid-template-columns:.55fr 1.45fr;gap:8%}
.case-editorial .case-no{font-size:11px;letter-spacing:.09em;color:#7b702e}
.case-editorial .case-grid h2{font:400 clamp(38px,4.6vw,66px)/1.05 var(--font-serif);letter-spacing:-.035em;margin-bottom:28px}
.case-editorial[lang=zh-CN] .case-grid h2{font-family:'Songti SC','STSong',serif;font-size:clamp(32px,3.5vw,48px);font-weight:300;line-height:1.5;letter-spacing:0}
.case-editorial .case-grid h2 em{color:#7b702e}
.case-editorial .case-grid p{font-size:16px;line-height:1.95;color:#53624e}
.case-editorial .evidence-section{margin:0 8% 55px}
.case-editorial .evidence-step{padding:35px 0;border-top:1px solid var(--line);grid-template-columns:1fr 1.5fr;gap:8%}
.case-editorial .evidence-index{font:italic 22px var(--font-serif);color:#9b8c43}
.case-editorial .evidence-step h3{font:400 32px/1.25 var(--font-serif);letter-spacing:-.015em;color:#23392c}
.case-editorial[lang=zh-CN] .evidence-step h3{font:300 25px/1.7 'Songti SC','STSong',serif}
.case-editorial .evidence-step p{font-size:15px;line-height:1.9;color:#53624e}
.case-editorial .evidence-step p strong{color:#364d3b;font-size:11px;letter-spacing:.04em}
.case-editorial .research-archive{margin:30px 5% 65px;background:#ece8da;border:1px solid #b7b59c66;border-radius:14px;padding:22px 26px}
.case-editorial .research-archive summary{font-size:13px;color:#40573f}
.case-editorial .research-archive-pages{margin-top:28px}
.case-editorial .research-archive img{border-radius:6px}
.case-editorial .research-archive figcaption{font-size:11px;color:#68745e}
.case-editorial .outcome-block{margin:0;padding:65px 8% 70px;background:#e5c94f;color:#253126;border-radius:26px 26px 0 0}
.case-editorial .outcome-block>.eyebrow{color:#61591f;font-size:11px;letter-spacing:.12em}
.case-editorial .outcome-block h2{font:400 clamp(28px,3.2vw,45px)/1.5 var(--font-serif);letter-spacing:-.015em}
.case-editorial[lang=zh-CN] .outcome-block h2{font-family:'Songti SC','STSong',serif;font-weight:300;font-size:clamp(25px,2.7vw,36px);line-height:1.8;letter-spacing:0}
.case-editorial .evidence-metrics{margin:38px 0;border-color:#726b313d}
.case-editorial .evidence-metrics dt,.case-editorial .evidence-metrics dd p{color:#555526}
.case-editorial .evidence-metrics dd>span{color:#24392a;font-family:var(--font-serif);font-size:60px}
.case-editorial .validation-grid h3{font:24px/1.3 var(--font-serif);color:#344526}
.case-editorial .validation-grid p,.case-editorial .publication-note,.case-editorial .honesty-note{color:#515124;border-color:#726b313d;font-size:14px;line-height:1.9}
.case-editorial .next-project{margin:0;padding:40px 8% 65px;background:#e5c94f;border-top:1px solid #756c323d;color:#172b20}
.case-editorial .next-project>span{font-size:11px;letter-spacing:.1em;color:#61591f}
.case-editorial .next-project strong{font:400 clamp(40px,5.5vw,80px)/1.1 var(--font-serif);letter-spacing:-.025em}
.case-editorial .next-project svg{color:#41502b}
@media(max-width:780px){.case-masthead{margin:6px 6px 0;border-radius:20px 20px 0 0}.case-editorial .project-nav{height:80px;display:flex;justify-content:space-between;font-size:12px;gap:15px}.case-editorial .project-nav .case-brand{display:none}.case-editorial .project-nav-actions{gap:12px}.case-editorial .project-hero{padding:42px 7% 45px;grid-template-columns:1fr;min-height:0;gap:25px}.case-editorial .project-hero h1{font-size:clamp(62px,14vw,105px)}.case-editorial .project-summary,.case-editorial[lang=zh-CN] .project-summary{font-size:20px;line-height:1.9}.case-editorial .project-facts{padding:22px 0 0;margin:0;border:0;border-top:1px solid #273d3030;display:grid;grid-template-columns:1fr 1fr;gap:18px}.case-editorial .project-facts p:last-child{grid-column:1/-1}.case-editorial .project-context{padding:30px 0;margin:0 7%}.case-editorial .project-context dl{grid-template-columns:1fr;gap:20px}.case-editorial .chapter-nav{margin:0 7%;padding:22px 0;flex-wrap:wrap;gap:8px}.case-editorial .chapter-nav a{padding:8px 12px}.case-editorial .chapter-nav>span{display:none}.case-editorial .project-cover,.case-editorial .process-spread{margin:0 3% 24px;padding:12px;border-radius:12px}.case-editorial .case-grid{margin:0 7%;padding:50px 0;grid-template-columns:1fr;gap:20px}.case-editorial .case-grid h2{font-size:42px}.case-editorial[lang=zh-CN] .case-grid h2{font-size:32px}.case-editorial .evidence-section{margin:0 7% 40px}.case-editorial .evidence-step{grid-template-columns:1fr;gap:18px;padding:28px 0}.case-editorial .evidence-step h3{font-size:29px}.case-editorial[lang=zh-CN] .evidence-step h3{font-size:24px}.case-editorial .research-archive{margin:25px 3% 45px;padding:18px}.case-editorial .outcome-block{padding:45px 7% 50px;border-radius:20px 20px 0 0}.case-editorial .next-project{padding:35px 7% 50px}.case-editorial .next-project strong{font-size:clamp(34px,9vw,55px)}}
@media(prefers-reduced-motion:reduce){.case-editorial *{transition:none!important;scroll-behavior:auto!important}}

.case-opening{margin:0 8%;padding:52px 0 36px;border-bottom:1px solid var(--line)}
.case-opening-copy{max-width:920px;margin-left:32%;}.case-opening h2{font:400 clamp(30px,3.4vw,46px)/1.2 var(--font-serif);margin:12px 0 18px}
.case-editorial[lang=zh-CN] .case-opening h2{font:300 clamp(27px,3vw,38px)/1.55 'Songti SC','STSong',serif}
.case-opening p:not(.eyebrow){font-size:16px;line-height:1.95;color:#53624e}
.case-story-section{padding:48px 0 25px}
.case-story-section .case-grid{padding:28px 0 22px}
.case-story-section .case-grid h2{font-size:clamp(30px,3.2vw,43px);margin:0}
.case-story-copy{margin:0 8% 20px 40%;max-width:760px}
.case-story-copy p{font-size:15px;line-height:2;color:#53624e;padding:0 0 20px;margin:0}
.case-media-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin:24px 8% 38px 40%}
.case-media-grid figure{margin:0;background:#eeeadf;border:1px solid #c3c1a9;border-radius:12px;padding:12px}
.case-media-grid img{display:block;width:100%;height:auto;max-height:420px;object-fit:contain;border-radius:6px}
.case-media-grid figcaption{font-size:12px;line-height:1.6;color:#53624e;padding:10px 2px 0}
.case-pdf-link{display:inline-flex;align-items:center;gap:10px;margin-top:18px;padding:10px 0;border-bottom:1px solid #75601b;color:#4d552e;font-size:13px;letter-spacing:.03em}
.case-pdf-link:hover{color:#886f16}
.case-editorial .project-context .case-pdf-link{align-self:flex-start}
@media(max-width:780px){.case-opening{margin:0 7%;padding:38px 0 28px}.case-opening-copy{margin-left:0}.case-opening h2{font-size:32px}.case-story-section{padding:30px 0 5px}.case-story-section .case-grid{padding:22px 0 15px}.case-story-copy{margin:0 7% 15px}.case-media-grid{margin:18px 7% 32px;grid-template-columns:1fr}.case-media-grid img{max-height:460px}}
