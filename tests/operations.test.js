const request = require('supertest');
const app = require('../index.js');

describe('Calculator API', () => {
  it('should calculate addition correctly', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input1: 10,
        input2: 20,
        operator: '+',
      })
      .set('email', `user1@gmail.com`);
      

    expect(200);
    expect(response.body.data.result).toBe(30);
  }); 

  it('should calculate subtraction correctly', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input1: 50,
        input2: 20,
        operator: '-',
      })
      .set('email', `user1@gmail.com`);
      

    expect(200);
    expect(response.body.data.result).toBe(30);
  }); 


  it('should calculate multiply correctly', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input1: 10,
        input2: 20,
        operator: '*',
      })
      .set('email', `user1@gmail.com`);
      

    expect(200);
    expect(response.body.data.result).toBe(200);
  });

  it('should calculate division correctly', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input1: 100,
        input2: 20,
        operator: '/',
      })
      .set('email', `user1@gmail.com`);
      

    expect(200);
    expect(response.body.data.result).toBe(5);
  });

})

describe('Calculator API Failing Testcase', () => {
  it('should calculate addition Incorrectly', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input1: 10,
        input2: 20,
      })
      .set('email', `user1@gmail.com`);
      

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Input is not correct');
  }); 

  it('should calculate subtraction Incorrectly', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input1: 50,
        operator: '-',
      })
      .set('email', `user1@gmail.com`);
      

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Input is not correct');
  }); 


  it('should calculate multiply Incorrectly', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input2: 20,
        operator: '*',
      })
      .set('email', `user1@gmail.com`);
      

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Input is not correct');
  });

  it('should calculate division Incorrectly', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input1: 100,
        input2: 20,
      })
      .set('email', `user1@gmail.com`);
      

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Input is not correct');
  });

  it('should calculate multiply Incorrectly type of error', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input1:1,
        input2: "20",
        operator: '*',
      })
      .set('email', `user1@gmail.com`);
      

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Input must be number');
  });


it('should calculate multiply Incorrectly type of error', async () => {
    const response = await request(app)
      .post('/api/operations')
      .send({
        input1:1,
        input2: 20,
        operator: '@',
      })
      .set('email', `user1@gmail.com`);
      

    expect(400);
    expect(response.body.message).toBe('Operator is not valid');
  });

})
