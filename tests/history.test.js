const request = require('supertest');
const app = require('../index.js');


// let server;

// beforeAll((done) => {
//   server = app.listen(4000, () => {
//     done();
//   });
// });

describe('History API', () => {
  it('should display history', async () => {
    const response = await request(app)
      .get('/api/history')
      .set('email', `user1@gmail.com`);
      

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
    
  }); 
})

describe('History API Failed Case', () => {
  it('should display history', async () => {
    const response = await request(app)
      .get('/api/history')
      .set('email', `new@gmail.com`);
      
    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('No History Found');
    
  }); 
})

describe('History API, delete one', () => {
  it('should display history', async () => {
    const response = await request(app)
      .delete('/api/history/670eb25f14d182a460fd6999')
      .set('email', `user@gmail.com`);
      

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Successfully deleted the single entry');
  }); 
})

describe('Reset API', () => {
  it('should display  no data, delete all', async () => {
    const response = await request(app)
      .delete('/api/history')
      .set('email', `user@gmail.com`);
      

    expect(204);
    expect(response.body.message).toBe('All Entries have been Successfully Deleted');
    
  }); 
})

// afterAll((done) => {
//   server.close(() => done());
// });

