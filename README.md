# aws-demo
AWSの動作確認用

■ECRへDockerイメージpush
docker build -t flask-demo-app . --platform=linux/x86_64
docker images
docker run -p 4000:4000 flask-demo-app

aws ecr get-login-password | docker login --username AWS --password-stdin https://XXXXXXXXXXX.dkr.ecr.ap-northeast-1.amazonaws.com
docker tag flask-demo-app:latest XXXXXXXXXXX.dkr.ecr.ap-northeast-1.amazonaws.com/sample-ecr-fargate3:latest
docker images
docker push XXXXXXXXXXX.dkr.ecr.ap-northeast-1.amazonaws.com/sample-ecr-fargate3:latest
aws ecr describe-images --repository-name sample-ecr-fargate3
