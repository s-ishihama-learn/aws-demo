import smtplib
from email.mime.text import MIMEText
from email.utils import formatdate

FROM = 'dev@localhost'  #送信元メールアドレス
# PASSWORD = '送信元のアカウントパスワード'
TO = 'dev.to@localhost'  #送信先メールアドレス
SUBJECT = 'メールの表題'
BODY = 'Pythonからメールを送信しました。'

#メールの内容
msg = MIMEText(BODY)
msg['Subject'] = SUBJECT
msg['From'] = FROM
msg['To'] = TO
msg['Date'] = formatdate()

#メール送信
smtpobj = smtplib.SMTP('localhost', 1025, timeout=10)
# smtpobj.login(FROM, PASSWORD)
smtpobj.sendmail(FROM, TO, msg.as_string())
smtpobj.close()
