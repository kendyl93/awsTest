module.exports = {
  apps: [
    {
      name: 'awsTest',
      script: './index.js'
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-216-56-193.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/kendyl93.pem',
      ref: 'origin/master',
      repo: 'https://github.com/kendyl93/awsTest.git',
      path: '/home/ubuntu/awsTest',
      'post-deploy':
        'cd awsTest/current && npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
