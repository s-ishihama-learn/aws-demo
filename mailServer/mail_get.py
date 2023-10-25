import poplib
import email
import email.header

# サーバに接続
cli = poplib.POP3('localhost', port=1080)
print('connected.')

# 認証
cli.user('dev.to@localhost')
cli.pass_('password')
print('logged in.')

# メールボックス内のメールの総数を取得
count = len(cli.list()[1])
print('found ' + str(count) + ' messages.')

deleted = 0
try:
    for i in range(count):
        no = i + 1
        # TOPコマンドでヘッダだけ受信する
        content = cli.top(no, 0)[1]
        msg = email.message_from_bytes(b'\r\n'.join(content))
        from_ = str(msg['From'])
        # 送信者（Fromヘッダ）に特定の文字列が含まれていたらメールを削除
        if from_.find('qq.com') > 0 or from_.find('163.com') > 0 or from_.find('sina.com') > 0:
            print('From: ' + from_ + ' => DELE ' + str(deleted))
            cli.dele(no)
            deleted += 1
finally:
    cli.quit() # 最後に必ず QUIT する
print(str(deleted) + ' messages deleted.')