# AjustaHora — app Android

Projeto Android que empacota o `index.html` do AjustaHora num WebView, servido localmente
(`WebViewAssetLoader`) com as fontes Nunito e Material Symbols embutidas, para funcionar offline.

- `minSdk` 26 (Android 8.0) · `compileSdk` 36
- Os arquivos web ficam em `app/src/main/assets/`. Ao alterar o `index.html` da raiz, copie-o para lá.

## Build

Requer JDK 17 e Android SDK (plataforma 36).

```bash
./gradlew assembleDebug      # APK de debug
./gradlew assembleRelease    # APK de release (precisa de keystore.properties, veja abaixo)
```

## Assinatura de release

Crie `keystore.properties` na pasta `android/` (não é versionado):

```
storeFile=../minha-chave.jks
storePassword=...
keyAlias=...
keyPassword=...
```

Sem esse arquivo, o `assembleRelease` gera um APK não assinado.

APK pronto: aba **Releases** do repositório.
