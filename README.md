- Always use Cloud9 when creating container based Lambda function as it takes forever or times out when doing it locally. 
- Use https://gist.githubusercontent.com/aqilzeeshan/9b1ea973b51e24afca51aedd93a6049b/raw/77ef1af8c2d2a2c40d38b16c to create cloud9 and subnet ending with c0020a9c as input parameter value
- https://docs.aws.amazon.com/cloud9/latest/user-guide/sample-cdk.html is helpful guide to setup Cloud9 for CDK but all is already setup, there is nothing to do.



# Welcome to your CDK TypeScript project!

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`HelloCdkStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
