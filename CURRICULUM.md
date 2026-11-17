# Next.js フロントエンド学習カリキュラム

ゼロからNext.js（React + TypeScript + Tailwind CSS）でフロントエンドのコードを書けるようになるための学習ロードマップ＆進捗管理ファイルです。

## 学習の進め方
1. **説明授業**：先生が1テーマずつ仕組みと書き方を解説
2. **課題**：実際にコードを書いて手を動かす
3. **採点**：コードレビュー・解説・このファイルの進捗更新

---

## カリキュラム＆進捗状況

### Phase 1：画面表示とページ作成の基礎（ゼロからの第一歩）
- [x] **Lesson 1：JSXの基本と最初のページ作成**（HTMLとの違い・App Routerの仕組み）
- [x] **Lesson 2：Tailwind CSSで見た目を作ろう**（余白・色・文字サイズ・Flexboxの基礎）
- [x] **Lesson 3：ページ間の移動と共通レイアウト**（`<Link>` と `layout.tsx` の役割）

### Phase 2：コンポーネント分割とデータの受け渡し
- [x] **Lesson 4：コンポーネントの切り出し**（UIを部品化して別ファイルに分ける）
- [x] **Lesson 5：Props（プロップス）とTypeScriptの型定義**（親から子へデータを渡して使い回す）

### Phase 3：動きのあるUIを作る（Client ComponentとState）
- [x] **Lesson 6：Server Component と Client Component**（`"use client"` とクリックイベント `onClick`）
- [x] **Lesson 7：`useState` で画面の状態を変える**（カウンター・開閉トグルなど）
- [x] **Lesson 8：条件分岐とリスト表示**（三項演算子/`&&` での出し分け、配列の `.map()` と `key`）
- [x] **Lesson 9：フォーム入力の扱い方**（テキスト入力 `input` の値取得と追加処理）

### Phase 4：Next.jsの実践機能と総仕上げ
- [ ] **Lesson 10：動的ルーティング**（`/users/[id]` のようなURLパラメータの扱い） ← **★現在ココ！**
- [ ] **Lesson 11：APIからのデータ取得（非同期処理）**（`async/await` と `fetch` で外部データを表示）
- [ ] **Lesson 12：卒業制作（ミニアプリ開発）**（これまでの知識を組み合わせて1つの画面を作る）

---

## 学習ログ・採点記録

| レッスン | 状態 | 採点・フィードバックメモ |
| :--- | :--- | :--- |
| Lesson 1 | 合格 (100点) | `app/profile/page.tsx` の作成、関数コンポーネント定義、JSXの `{}` による変数埋め込みすべて完璧！ |
| Lesson 2 | 合格 (100点) | `className` を使ったカード装飾・文字サイズ・色・余白の指定がバッチリ！ |
| Lesson 3 | 合格 (100点) | `layout.tsx` へのナビゲーション追加と `profile/page.tsx` からの `<Link>` 遷移が完璧！Phase 1 制覇！ |
| Lesson 4 | 合格 (100点) | `components/ProfileCard.tsx` への切り出しと `page.tsx` でのインポート・複数配置が完璧！ |
| Lesson 5 | 合格 (100点) | `type ProfileCardProps` の型定義と分割代入、親からのProps受け渡しがバッチリ！Phase 2 制覇！ |
| Lesson 6 | 合格 (100点) | `"use client"` の宣言と `onClick={() => alert(...)}` によるイベント処理が完璧！ |
| Lesson 7 | 合格 (120点!) | `useState` の実装に加え、自ら `LikeButton.tsx` を別コンポーネントに切り出すプロの設計を実践！ |
| Lesson 8 | 合格 (100点) | 三項演算子（`? :`）による条件分岐と、`.map()` + `key` を使った配列データのリスト表示が完璧！ |
| Lesson 9 | 合格 (100点) | `useState` と `<input>` の `value` / `onChange` 連動がバッチリ！Phase 3 制覇！ |
| Lesson 10 | 挑戦中 | - |
