import React from 'react'
import Helmet from 'react-helmet'

import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { PageLayout } from '../components/PageLayout'
import config from '../utils/config'

export default function Me() {
  const title = 'Hakkımda'

  return (
    <>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO />

      <PageLayout>

        <section className="section-about">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <div className="about-text">
              <div className="about-intro">
                <p>
                  Ben Selamet. Yaklaşık <strong>9 yıldır</strong> yazılım dünyasının içindeyim.
                  Son <strong>6 yıldır</strong> profesyonel olarak farklı şirketlerde çalışıyorum.
                </p>

                <p>
                  Bir hobi olarak başladığım <strong>neon</strong> üretimini,
                  artık profesyonel olarak yapıyorum. Çalışmalarımı{' '}
                  <a
                    href="https://instagram.com/neoonlush"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-highlight"
                  >
                    @neoonlush
                  </a>{' '}
                  Instagram hesabında paylaşıyorum.
                </p>

                <p>
                  Şu sıralar <a href="https://heybooster.ai" target="_blank" rel="noopener" referrerPolicy="origin" className="link-highlight">heybooster</a>'da{' '}
                  <strong>Software Engineer</strong> olarak çalışıyorum.
                  Günlerim sıfırdan ölçeklenebilir sistemler tasarlamak,
                  performans iyileştirmeleri ve mimari kararlar almakla geçiyor.
                  Bunun yanında <strong>LLM tabanlı ürünler</strong>,
                  Terraform ile <strong>altyapı yönetimi</strong>, CI/CD ve
                  observability tarafında da uçtan uca sorumluluk alıyorum.
                </p>
              </div>

              <div className="about-goals">
                <p>
                  2026 için hedeflerim: daha fazla <strong>yazmak</strong>,{' '}
                  öğrendiklerimi <strong>paylaşmak</strong> ve
                  gerçekten kullandığım teknolojiler hakkında{' '}
                  <strong>teknik yazılar</strong> üretmek.
                  Bu blog da bu niyetle ortaya çıktı.
                </p>
              </div>

              <div className="about-topics">
                <p className="topics-intro">Burada ağırlıklı olarak şunlardan bahsedeceğim:</p>
                <ul className="topics-list">
                  <li>Sistem mimarileri ve gerçek hayatta nasıl kurgulandıkları</li>
                  <li>Backend tarafında sık kullanılan araçlar ve detayları</li>
                  <li>Bir tool'un ne zaman işe yaradığı, ne zaman yaramadığı</li>
                  <li>Prod ortamda yaşanan problemler ve bunlarla baş etme yolları</li>
                </ul>
              </div>

              <div className="about-approach">
                <p>
                  Yazılar daha çok <strong>pratik</strong> olacak.
                  Dokümantasyon tekrarı yerine, "ben bunu nerede kullandım,
                  ne işe yaradı, nerede canımı sıktı" gibi deneyimlere dayanacak.
                </p>
              </div>
            </div>
            <div className="about-photo">
              <Hero type="index">
                <div className="hero-image-container">
                  <div className="hero-background-shape" />
                  <img src="/logo.png" className="hero-image" alt="Logo" />
                </div>
              </Hero>
            </div>
          </div>
          <blockquote className="quotation quotation-neon">
            <p>
              Karanlık editörlerde yazılan her kod, neon ışıltısına ihtiyaç duyar.
            </p>
            <footer>— Selamet</footer>
          </blockquote>
          <div className="photo-gallery">
            <img src="/me-photo-1.JPG" alt="Fotoğraf 1" className="photo-gallery-item" />
            <img src="/me-photo-2.JPG" alt="Fotoğraf 2" className="photo-gallery-item" />
          </div>
        </section>

        <section className="section-about">
          <h2>Tech Stack</h2>
          <div className="tech-stack">
            <div className="tech-category">
              <h3>Backend Frameworks</h3>
              <div className="tech-tags">
                <span className="tech-tag tech-tag-favorite">Python</span>
                <span className="tech-tag tech-tag-favorite">FastAPI</span>
                <span className="tech-tag">Django</span>
                <span className="tech-tag">Django REST Framework</span>
                <span className="tech-tag">Flask</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>AI & LLM</h3>
              <div className="tech-tags">
                <span className="tech-tag tech-tag-favorite">Claude API</span>
                <span className="tech-tag">Gemini (Vertex AI)</span>
                <span className="tech-tag">LLM Tool Calling</span>
                <span className="tech-tag">Prompt Caching</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Message Queues & Task Processing</h3>
              <div className="tech-tags">
                <span className="tech-tag tech-tag-favorite">Celery</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">RabbitMQ</span>
                <span className="tech-tag">AWS SQS</span>
                <span className="tech-tag">AWS EventBridge</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Databases & Search</h3>
              <div className="tech-tags">
                <span className="tech-tag tech-tag-favorite">PostgreSQL</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag tech-tag-favorite">Elasticsearch</span>
                <span className="tech-tag">OpenSearch</span>
                <span className="tech-tag">Kibana</span>
                <span className="tech-tag">AWS DynamoDB</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Cloud</h3>
              <div className="tech-tags">
                <span className="tech-tag tech-tag-favorite">Azure Container Apps</span>
                <span className="tech-tag">Azure VMs / VNet / NSG</span>
                <span className="tech-tag">Azure Blob Storage</span>
                <span className="tech-tag">Azure Managed Redis</span>
                <span className="tech-tag">AWS Lambda</span>
                <span className="tech-tag">AWS ECS</span>
                <span className="tech-tag">AWS S3</span>
                <span className="tech-tag">AWS CloudWatch</span>
                <span className="tech-tag">AWS CodePipeline</span>
                <span className="tech-tag">Google Compute Engine</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>DevOps & Observability</h3>
              <div className="tech-tags">
                <span className="tech-tag tech-tag-favorite">Docker</span>
                <span className="tech-tag tech-tag-favorite">Terraform</span>
                <span className="tech-tag">GitHub Actions</span>
                <span className="tech-tag">CI/CD</span>
                <span className="tech-tag">Nginx</span>
                <span className="tech-tag">Linux</span>
                <span className="tech-tag">Elastic APM</span>
                <span className="tech-tag">Sentry</span>
                <span className="tech-tag">Git</span>
              </div>
            </div>

            <div className="tech-category">
              <h3>Architecture & Other</h3>
              <div className="tech-tags">
                <span className="tech-tag">REST API Design</span>
                <span className="tech-tag">Event-driven Architecture</span>
                <span className="tech-tag">Distributed Systems</span>
                <span className="tech-tag">Serverless</span>
                <span className="tech-tag">OAuth 2.0</span>
                <span className="tech-tag">Stripe</span>
                <span className="tech-tag">Query Optimization</span>
                <span className="tech-tag">Caching</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-about">
          <h2>Projeler</h2>
          <div className="project-list">
            <a
              href="https://fislik.selamet.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>Fişlik</h3>
              <p>
                Küçük işletmeler ile muhasebecileri arasında fiş fotoğrafı
                paylaşımı. FastAPI backend, Gemini ile fiş okuma, admin
                paneli, aylık kredi sistemi ve kurulabilir PWA arayüz.
              </p>
              <span className="project-link">fislik.selamet.dev</span>
            </a>
            <a
              href="https://github.com/selamet/pretty-lush"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>pretty-lush</h3>
              <p>
                Tarayıcı içinde çalışan, 12 dil destekli kod formatlayıcı
                (Prettier, Ruff, sql-formatter). Şifreli snippet paylaşımı,
                JSONPath, JWT decoder ve çevrimdışı PWA. Kod sekmeden dışarı çıkmaz.
              </p>
              <span className="project-link">github.com/selamet/pretty-lush</span>
            </a>
            <a
              href="https://github.com/selamet/letsraffle-api"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>letsraffle</h3>
              <p>
                Anında sonuç üreten basit ve güvenli çekiliş platformu.
                FastAPI REST API, Celery/Redis görev kuyrukları ve
                Docker ile dağıtım.
              </p>
              <span className="project-link">github.com/selamet/letsraffle-api</span>
            </a>
          </div>
        </section>

        <section className="section-about">
          <h2>İletişim</h2>
          <div className="contact-section">
            <p className="contact-intro">
              Benimle iletişime geçmek isterseniz aşağıdaki kanallardan
              ulaşabilirsiniz:
            </p>
            <div className="contact-links">
              <a
                href="mailto:selametsamli@gmail.com"
                className="button contact-button"
              >
                Email
              </a>
              <a
                href="https://github.com/selamet"
                target="_blank"
                rel="noopener noreferrer"
                className="button contact-button"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/selametsamli"
                target="_blank"
                rel="noopener noreferrer"
                className="button contact-button"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/selametsamli/"
                target="_blank"
                rel="noopener noreferrer"
                className="button contact-button"
              >
                LinkedIn
              </a>
              <a
                href="/selamet_samli_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button contact-button contact-button-cv"
              >
                CV İndir
              </a>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  )
}

Me.Layout = Layout

