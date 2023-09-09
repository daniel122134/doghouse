
import fetch from 'node-fetch';
const host= 'http://localhost:8080';

//test getAllUsers
describe('GET /users', function() {
  it('should return 200 response', function(done, fail) {
    
    fetch(host + 'api/getAllUsers').then(function(response) {
      
      expect(response.status).toBe(200);
      done();
    }).catch(function(err) {
      fail(err);
    })
  });
})