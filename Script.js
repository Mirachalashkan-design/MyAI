<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, viewport-fit=cover"
  >

  <meta
    name="theme-color"
    content="#a978c4"
  >

  <title>MiMiAi</title>

  <link rel="stylesheet" href="style.css">
</head>

<body data-theme="mimi">
  <div class="background-decoration" aria-hidden="true">
    <span class="glow glow-one"></span>
    <span class="glow glow-two"></span>
    <span class="glow glow-three"></span>
    <span class="floating-symbol symbol-one">✦</span>
    <span class="floating-symbol symbol-two">♡</span>
    <span class="floating-symbol symbol-three">✿</span>
  </div>

  <div class="mobile-overlay" id="mobileOverlay"></div>

  <main class="app-shell">
    <aside class="sidebar" id="sidebar">
      <div class="brand">
        <button
          class="brand-logo"
          id="brandLogo"
          type="button"
          aria-label="MiMiAi ana sayfa"
        >
          🌸
        </button>

        <div class="brand-copy">
          <h1>MiMiAi</h1>
          <p>Senin dünyan, senin yapay zekân</p>
        </div>
      </div>

      <button class="new-chat-button" id="newChatButton" type="button">
        <span>＋</span>
        <span>Yeni sohbet</span>
      </button>

      <nav class="main-menu" aria-label="Ana menü">
        <button
          class="menu-button active"
          data-panel="chatPanel"
          data-title="MiMiAi ile sohbet"
          data-subtitle="Aklındaki her şeyi rahatça sorabilirsin."
          type="button"
        >
          <span class="menu-icon">💬</span>
          <span>Sohbet</span>
        </button>

        <button
          class="menu-button"
          data-panel="profilePanel"
          data-title="Kişisel bilgiler"
          data-subtitle="MiMiAi'nin seni nasıl tanıyacağını belirle."
          type="button"
        >
          <span class="menu-icon">👤</span>
          <span>Kişisel bilgiler</span>
        </button>

        <button
          class="menu-button"
          data-panel="themesPanel"
          data-title="Tema dünyası"
          data-subtitle="MiMiAi'nin görünümünü tamamen değiştir."
          type="button"
        >
          <span class="menu-icon">🎨</span>
          <span>Tema dünyası</span>
        </button>

        <button
          class="menu-button"
          data-panel="studioPanel"
          data-title="Resim stüdyosu"
          data-subtitle="Hayallerini görsellere dönüştür."
          type="button"
        >
          <span class="menu-icon">🖼️</span>
          <span>Resim stüdyosu</span>
        </button>

        <button
          class="menu-button"
          data-panel="memoryPanel"
          data-title="MiMiAi hafızası"
          data-subtitle="Hatırlanmasını istediğin bilgileri yönet."
          type="button"
        >
          <span class="menu-icon">🧠</span>
          <span>Hafıza</span>
        </button>

        <button
          class="menu-button"
          data-panel="filesPanel"
          data-title="Dosyalar ve PDF"
          data-subtitle="Belgelerini yükle ve MiMiAi ile incele."
          type="button"
        >
          <span class="menu-icon">📄</span>
          <span>Dosyalar ve PDF</span>
        </button>

        <button
          class="menu-button"
          data-panel="settingsPanel"
          data-title="Ayarlar"
          data-subtitle="MiMiAi deneyimini kişiselleştir."
          type="button"
        >
          <span class="menu-icon">⚙️</span>
          <span>Ayarlar</span>
        </button>
      </nav>

      <div class="sidebar-footer">
        <div class="mini-profile">
          <div class="mini-avatar" id="miniAvatar">🌸</div>

          <div>
            <strong id="miniProfileName">MiMiAi kullanıcısı</strong>
            <span id="miniProfileTheme">MiMiAi Pastel</span>
          </div>
        </div>
      </div>
    </aside>

    <section class="main-area">
      <header class="topbar">
        <button
          class="mobile-menu-button"
          id="mobileMenuButton"
          type="button"
          aria-label="Menüyü aç"
        >
          ☰
        </button>

        <div class="page-heading">
          <h2 id="pageTitle">MiMiAi ile sohbet</h2>
          <p id="pageSubtitle">
            Aklındaki her şeyi rahatça sorabilirsin.
          </p>
        </div>

        <div class="topbar-actions">
          <button
            class="topbar-button"
            id="quickThemeButton"
            type="button"
            aria-label="Tema seç"
          >
            🎨
          </button>

          <button
            class="topbar-button"
            id="darkModeButton"
            type="button"
            aria-label="Karanlık mod"
          >
            ☾
          </button>
        </div>
      </header>

      <div class="workspace">
        <section class="panel active" id="chatPanel">
          <div class="chat-scroll" id="chatScroll">
            <div class="welcome-card">
              <div class="welcome-icon" id="welcomeIcon">🌸</div>

              <p class="eyebrow">Kendi dünyana hoş geldin</p>

              <h3 id="welcomeTitle">Merhaba, ben MiMiAi</h3>

              <p id="welcomeDescription">
                Sorularını cevaplamak, araştırmak, plan yapmak,
                üretmek ve sana eşlik etmek için buradayım.
              </p>

              <div class="mode-badges">
                <span>💗 Nazik</span>
                <span>🔎 Araştırmacı</span>
                <span>✨ Yaratıcı</span>
                <span>🧠 Dürüst</span>
              </div>
            </div>

            <div class="quick-actions">
              <button
                class="quick-card"
                data-prompt="Bugün bana yeni bir şey öğret."
                type="button"
              >
                <span>📚</span>
                <strong>Bir şey öğret</strong>
                <small>Kısa veya ayrıntılı anlatım</small>
              </button>

              <button
                class="quick-card"
                data-prompt="Evdeki malzemelerimle yemek öner."
                type="button"
              >
                <span>🍓</span>
                <strong>Yemek modu</strong>
                <small>Tarif ve alışveriş listesi</small>
              </button>

              <button
                class="quick-card"
                data-prompt="Bu konuda güvenilir kaynaklarla araştırma yap."
                type="button"
              >
                <span>🔎</span>
                <strong>Araştırma</strong>
                <small>Birden fazla kaynak</small>
              </button>

              <button
                class="quick-card"
                data-prompt="Birlikte yaratıcı bir fikir geliştirelim."
                type="button"
              >
                <span>🦄</span>
                <strong>Yaratıcı fikir</strong>
                <small>Hikâye, tasarım ve plan</small>
              </button>
            </div>

            <div class="messages" id="messages">
              <div class="message-row mimi-row">
                <div class="message-avatar">🌸</div>

                <div class="message mimi-message">
                  Merhaba 🌸 Bugün ne yapmak istersin?
                </div>
              </div>
            </div>
          </div>

          <div class="composer-area">
            <div class="composer">
              <button
                class="composer-icon-button"
                id="attachmentButton"
                type="button"
                aria-label="Dosya ekle"
              >
                ＋
              </button>

              <textarea
                id="messageInput"
                rows="1"
                placeholder="MiMiAi'ye bir şey yaz..."
              ></textarea>

              <button
                class="composer-icon-button"
                id="voiceButton"
                type="button"
                aria-label="Sesli konuş"
              >
                🎙️
              </button>

              <button class="send-button" id="sendButton" type="button">
                Gönder
              </button>
            </div>

            <p class="composer-note">
              Gerçek yapay zekâ bağlantısını bir sonraki aşamada ekleyeceğiz.
            </p>
          </div>
        </section>

        <section class="panel" id="profilePanel">
          <div class="panel-scroll">
            <div class="section-intro">
              <div class="section-icon">👤</div>

              <div>
                <p class="eyebrow">MiMiAi seni tanısın</p>
                <h3>Kişisel bilgiler</h3>
                <p>
                  Yalnızca paylaşmak istediğin bilgileri doldur.
                </p>
              </div>
            </div>

            <form class="profile-form" id="profileForm">
              <article class="form-card">
                <div class="card-heading">
                  <span>🌸</span>

                  <div>
                    <h4>Temel bilgiler</h4>
                    <p>Sana nasıl hitap edeceğimizi belirle.</p>
                  </div>
                </div>

                <div class="form-grid">
                  <label class="field">
                    <span>Adın veya takma adın</span>
                    <input
                      id="profileName"
                      name="name"
                      type="text"
                      placeholder="Örneğin Fatoş"
                    >
                  </label>

                  <label class="field">
                    <span>Doğum tarihi</span>
                    <input
                      id="profileBirthday"
                      name="birthday"
                      type="date"
                    >
                  </label>

                  <label class="field">
                    <span>Yaşadığın ülke</span>
                    <input
                      id="profileCountry"
                      name="country"
                      type="text"
                      placeholder="Örneğin Hollanda"
                    >
                  </label>

                  <label class="field">
                    <span>Tercih ettiğin dil</span>
                    <select id="profileLanguage" name="language">
                      <option value="tr">Türkçe</option>
                      <option value="en">English</option>
                      <option value="nl">Nederlands</option>
                      <option value="bg">Български</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </label>
                </div>
              </article>

              <article class="form-card">
                <div class="card-heading">
                  <span>💭</span>

                  <div>
                    <h4>Hakkında</h4>
                    <p>MiMiAi'nin seni daha iyi anlamasına yardımcı ol.</p>
                  </div>
                </div>

                <label class="field">
                  <span>Kendini nasıl anlatırsın?</span>

                  <textarea
                    id="profileAbout"
                    name="about"
                    rows="4"
                    placeholder="İlgi alanların, mesleğin, ailen veya günlük hayatın..."
                  ></textarea>
                </label>

                <label class="field">
                  <span>Hedeflerin</span>

                  <textarea
                    id="profileGoals"
                    name="goals"
                    rows="3"
                    placeholder="Öğrenmek, seyahat etmek, sağlıklı yaşamak..."
                  ></textarea>
                </label>
              </article>

              <article class="form-card">
                <div class="card-heading">
                  <span>🍽️</span>

                  <div>
                    <h4>Yemek tercihleri</h4>
                    <p>Tariflerin sana uygun hazırlanmasını sağla.</p>
                  </div>
                </div>

                <div class="choice-grid">
                  <label class="choice">
                    <input type="checkbox" name="food" value="Turkish">
                    <span>Türk mutfağı</span>
                  </label>

                  <label class="choice">
                    <input type="checkbox" name="food" value="Vegetarian">
                    <span>Vejetaryen</span>
                  </label>

                  <label class="choice">
                    <input type="checkbox" name="food" value="Vegan">
                    <span>Vegan</span>
                  </label>

                  <label class="choice">
                    <input type="checkbox" name="food" value="Healthy">
                    <span>Sağlıklı tarifler</span>
                  </label>

                  <label class="choice">
                    <input type="checkbox" name="food" value="Dessert">
                    <span>Tatlılar</span>
                  </label>

                  <label class="choice">
                    <input type="checkbox" name="food" value="Quick">
                    <span>Hızlı yemekler</span>
                  </label>
                </div>

                <label class="field">
                  <span>Alerjiler veya istemediğin malzemeler</span>

                  <input
                    id="profileAllergies"
                    name="allergies"
                    type="text"
                    placeholder="Örneğin fındık, laktoz..."
                  >
                </label>
              </article>

              <div class="form-actions">
                <button class="secondary-button" id="clearProfileButton" type="button">
                  Bilgileri sil
                </button>

                <button class="primary-button" type="submit">
                  Bilgileri kaydet
                </button>
              </div>

              <p class="save-message" id="profileSaveMessage"></p>
            </form>
          </div>
        </section>

        <section class="panel" id="themesPanel">
          <div class="panel-scroll">
            <div class="section-intro">
              <div class="section-icon">🎨</div>

              <div>
                <p class="eyebrow">Senin tarzın</p>
                <h3>Tema dünyası</h3>
                <p>
                  Bir tema seç veya kendi rengini oluştur.
                </p>
              </div>
            </div>

            <div class="theme-grid">
              <button class="theme-card selected" data-theme-choice="mimi" type="button">
                <div class="theme-preview theme-mimi">
                  <span>🌸</span>
                </div>
                <strong>MiMiAi Pastel</strong>
                <small>Lila, pembe, mint ve sarı</small>
              </button>

              <button class="theme-card" data-theme-choice="magic" type="button">
                <div class="theme-preview theme-magic">
                  <span>🪄</span>
                </div>
                <strong>Büyülü Akademi</strong>
                <small>Gece mavisi, altın ve sihir</small>
              </button>

              <button class="theme-card" data-theme-choice="boss" type="button">
                <div class="theme-preview theme-boss">
                  <span>👶</span>
                </div>
                <strong>Minik Patron</strong>
                <small>Lacivert, beyaz ve iş dünyası</small>
              </button>

              <button class="theme-card" data-theme-choice="club" type="button">
                <div class="theme-preview theme-club">
                  <span>📚</span>
                </div>
                <strong>Arkadaşlık Kulübü</strong>
                <small>BSC havasında eğlenceli retro</small>
              </button>

              <button class="theme-card" data-theme-choice="yesday" type="button">
                <div class="theme-preview theme-yesday">
                  <span>🎉</span>
                </div>
                <strong>Yes Day</strong>
                <small>Enerjik, renkli ve eğlenceli</small>
              </button>

              <button class="theme-card" data-theme-choice="rainbow" type="button">
                <div class="theme-preview theme-rainbow">
                  <span>🌈</span>
                </div>
                <strong>Gökkuşağı</strong>
                <small>Canlı ve neşeli renk geçişleri</small>
              </button>

              <button class="theme-card" data-theme-choice="unicorn" type="button">
                <div class="theme-preview theme-unicorn">
                  <span>🦄</span>
                </div>
                <strong>Unicorn Rüyası</strong>
                <small>Işıltılı, masalsı ve pastel</small>
              </button>
            </div>

            <article class="custom-color-card">
              <div>
                <h4>Kendi rengini seç</h4>
                <p>
                  Butonların ve vurguların ana rengini değiştirebilirsin.
                </p>
              </div>

              <div class="color-control">
                <input
                  id="customAccentColor"
                  type="color"
                  value="#9f79bd"
                  aria-label="Özel vurgu rengi"
                >

                <button
                  class="primary-button"
                  id="applyCustomColorButton"
                  type="button"
                >
                  Rengi uygula
                </button>
              </div>
            </article>
          </div>
        </section>

        <section class="panel" id="studioPanel">
          <div class="panel-scroll">
            <div class="section-intro">
              <div class="section-icon">🖼️</div>

              <div>
                <p class="eyebrow">MiMiAi Studio</p>
                <h3>Hayalindeki resmi anlat</h3>
                <p>Görsel üretme beynini daha sonra bağlayacağız.</p>
              </div>
            </div>

            <div class="studio-layout">
              <article class="form-card">
                <label class="field">
                  <span>Görsel açıklaması</span>

                  <textarea
                    id="imagePrompt"
                    rows="8"
                    placeholder="Pastel renklerde, gökkuşağının altında duran masalsı bir unicorn..."
                  ></textarea>
                </label>

                <div class="style-options">
                  <button class="style-chip selected" type="button">Aesthetic</button>
                  <button class="style-chip" type="button">Watercolor</button>
                  <button class="style-chip" type="button">Dreamy</button>
                  <button class="style-chip" type="button">Editorial</button>
                </div>

                <button class="primary-button full-width" id="generateButton" type="button">
                  ✨ Önizleme oluştur
                </button>
              </article>

              <div class="image-preview" id="imagePreview">
                <span class="preview-emoji">🦄</span>
                <strong>MiMiAi Studio</strong>
                <p id="imagePreviewText">
                  Açıklaman burada önizlenecek.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="panel" id="memoryPanel">
          <div class="panel-scroll">
            <div class="section-intro">
              <div class="section-icon">🧠</div>

              <div>
                <p class="eyebrow">Kontrol sende</p>
                <h3>Hafıza ayarları</h3>
                <p>MiMiAi'nin neleri hatırlayabileceğini belirle.</p>
              </div>
            </div>

            <div class="settings-list">
              <label class="setting-row">
                <div>
                  <strong>Kişisel bilgileri hatırla</strong>
                  <span>Ad, dil ve tercihlerini kullan.</span>
                </div>

                <input
                  class="switch-input"
                  id="rememberProfile"
                  type="checkbox"
                  checked
                >
              </label>

              <label class="setting-row">
                <div>
                  <strong>Yemek tercihlerini hatırla</strong>
                  <span>Tarifleri tercihlerine göre düzenle.</span>
                </div>

                <input
                  class="switch-input"
                  id="rememberFood"
                  type="checkbox"
                  checked
                >
              </label>

              <label class="setting-row">
                <div>
                  <strong>Sohbetlerden öğren</strong>
                  <span>İzin verdiğin önemli ayrıntıları kaydet.</span>
                </div>

                <input
                  class="switch-input"
                  id="rememberChats"
                  type="checkbox"
                >
              </label>
            </div>
          </div>
        </section>

        <section class="panel" id="filesPanel">
          <div class="panel-scroll center-content">
            <div class="empty-state">
              <div class="empty-icon">📄</div>
              <h3>Dosyalar ve PDF</h3>
              <p>
                PDF, fotoğraf ve belgeleri yükleme özelliğini
                yapay zekâ bağlantısıyla ekleyeceğiz.
              </p>

              <button class="primary-button" type="button">
                Dosya seç
              </button>
            </div>
          </div>
        </section>

        <section class="panel" id="settingsPanel">
          <div class="panel-scroll">
            <div class="section-intro">
              <div class="section-icon">⚙️</div>

              <div>
                <p class="eyebrow">MiMiAi deneyimi</p>
                <h3>Ayarlar</h3>
                <p>Dil, görünüm ve cevap stilini yönet.</p>
              </div>
            </div>

            <div class="settings-list">
              <label class="setting-row select-row">
                <div>
                  <strong>Cevap uzunluğu</strong>
                  <span>MiMiAi'nin ne kadar ayrıntılı yazacağını seç.</span>
                </div>

                <select id="answerLength">
                  <option value="adaptive">Duruma göre</option>
                  <option value="short">Kısa</option>
                  <option value="detailed">Ayrıntılı</option>
                </select>
              </label>

              <label class="setting-row select-row">
                <div>
                  <strong>MiMiAi kişiliği</strong>
                  <span>Cevapların genel havasını belirle.</span>
                </div>

                <select id="personalityMode">
                  <option value="mimi">MiMiAi</option>
                  <option value="teacher">Öğretmen</option>
                  <option value="researcher">Araştırmacı</option>
                  <option value="creative">Yaratıcı</option>
                  <option value="planner">Planlayıcı</option>
                </select>
              </label>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>

  <div class="toast" id="toast" role="status"></div>

  <script src="script.js"></script>
</body>
</html>
