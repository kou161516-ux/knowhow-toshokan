#!/bin/bash
# LINE Messaging API 環境変数セットアップ
# 使い方: bash setup-line.sh
#
# 事前準備：
#   LINE Developers Console > チャンネル > Messaging API
#   - チャンネルアクセストークン（長期）
#   - 自分のユーザーID（Messaging API > 「Your user ID」欄）

set -e

SCOPE="kou161516-2723s-projects"
PROJECT_DIR="/Users/yoshinokouichi/sites/knowhow-toshokan"

echo "=== LINE Messaging API セットアップ ==="
echo ""

read -r -p "LINE_CHANNEL_ACCESS_TOKEN を貼り付けてください: " LINE_TOKEN
read -r -p "LINE_USER_ID を貼り付けてください: " LINE_USER_ID

if [ -z "$LINE_TOKEN" ] || [ -z "$LINE_USER_ID" ]; then
  echo "❌ 両方入力してください"
  exit 1
fi

echo ""
echo "Vercel に設定中..."

echo "$LINE_TOKEN" | vercel env add LINE_CHANNEL_ACCESS_TOKEN production \
  --scope "$SCOPE" --cwd "$PROJECT_DIR" --force 2>/dev/null && \
  echo "✅ LINE_CHANNEL_ACCESS_TOKEN → production" || \
  echo "⚠ production の設定に失敗"

echo "$LINE_TOKEN" | vercel env add LINE_CHANNEL_ACCESS_TOKEN preview \
  --scope "$SCOPE" --cwd "$PROJECT_DIR" --force 2>/dev/null && \
  echo "✅ LINE_CHANNEL_ACCESS_TOKEN → preview" || true

echo "$LINE_USER_ID" | vercel env add LINE_USER_ID production \
  --scope "$SCOPE" --cwd "$PROJECT_DIR" --force 2>/dev/null && \
  echo "✅ LINE_USER_ID → production" || \
  echo "⚠ production の設定に失敗"

echo "$LINE_USER_ID" | vercel env add LINE_USER_ID preview \
  --scope "$SCOPE" --cwd "$PROJECT_DIR" --force 2>/dev/null && \
  echo "✅ LINE_USER_ID → preview" || true

# .env.local に書き込み（ローカル開発用）
ENV_FILE="$PROJECT_DIR/.env.local"
{
  grep -v "^LINE_CHANNEL_ACCESS_TOKEN\|^LINE_USER_ID" "$ENV_FILE" 2>/dev/null || true
  echo "LINE_CHANNEL_ACCESS_TOKEN=$LINE_TOKEN"
  echo "LINE_USER_ID=$LINE_USER_ID"
} > "$ENV_FILE.tmp" && mv "$ENV_FILE.tmp" "$ENV_FILE"
echo "✅ .env.local 更新済み"

echo ""
echo "=== 完了！再デプロイして反映させます ==="
vercel deploy --prod --scope "$SCOPE" --cwd "$PROJECT_DIR" --yes 2>&1 | tail -5
