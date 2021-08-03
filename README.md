# Next Template
## 内容
Next.jsで作る際のテンプレートプロジェクトを作成する

## 使用想定
このレポジトリのコードをコピーするか、forkしてcloneして使用する。

## 始め方
### ローカルにcloneして来たら以下のコマンドを実行する。
```bash
$ yarn install
```
### ローカル起動
```bash
$ yarn dev:local  # ローカル向けにビルド（基本このコマンド）
$ yarn dev:docker # Docker環境向けにビルド
```
### ビルド方法
実行後「out」ディレクトリに静的ファイルが出力されます
```bash
$ yarn build:local  # ローカル向けにビルド
$ yarn build:dev    # Develop環境向けにビルド
$ yarn build:stg    # STG環境向けにビルド
$ yarn build:prod   # Production環境向けにビルド
```
