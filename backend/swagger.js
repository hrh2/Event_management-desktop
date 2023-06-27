const annotations = {
    openapi: '3.0.0',
    info: {
      title: 'EventConnect APIs',
      version: '1.0.0',
      description: 'API for Event management System',
    },
    servers: [
        {
          url: 'http://localhost:3300',
        },
      ],
    'tags':[
        {name:'Users'},
        {name:'Event'},
        {name:'Meeting'},
        {name:'Wedding'},
        {name:'Profile'}
      ],
    paths: {
      '/v1/api/signup': {
        post: {
          tags:["Users"],
          summary: 'Create a new user',
          description: 'Endpoint to create a new user',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    username: {
                      type: 'string',
                      description: 'The username of the user',
                      example: 'john123',
                    },
                    email: {
                      type: 'string',
                      description: 'The email address of the user',
                      example: 'johndoe@example.com',
                    },
                    password: {
                      type: 'string',
                      description: 'The password for the user',
                      example: 'p@ssw0rd',
                    },
                    fullName: {
                      type: 'string',
                      description: 'The full name of the user',
                      example: 'John Doe',
                    },
                    phoneNumber: {
                      type: 'string',
                      description: 'The phone number of the user',
                      example: '1234567890',
                    },
                  },
                  required: ['username', 'email', 'password'],
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'User created successfully',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      _id: {
                        type: 'string',
                        description: 'The ID of the created user',
                        example: '123456789',
                      },
                      username: {
                        type: 'string',
                        description: 'The username of the user',
                        example: 'john123',
                      },
                      email: {
                        type: 'string',
                        description: 'The email address of the user',
                        example: 'johndoe@example.com',
                      },
                    },
                  },
                },
              },
            },
            '400': {
              description: 'Invalid request data',
            },
          },
        },
      },
      '/v1/api/login': {
        post: {
          tags: ["Users"],
          summary: 'User login',
          description: 'Endpoint for user login',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      description: 'The email address of the user',
                      example: 'johndoe@example.com',
                    },
                    password: {
                      type: 'string',
                      description: 'The password for the user',
                      example: 'p@ssw0rd',
                    },
                  },
                  required: ['email', 'password'],
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'Successful login',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      token: {
                        type: 'string',
                        description: 'Access token for the authenticated user',
                        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJlbWFpbCI6ImpvaG5kb2VAZXhhbXBsZS5jb20iLCJpYXQiOjE2MzAwMzM1MjV9.TsfxzxLHf9vGS8NMh4oHXht0O-vW9w3U5XvW7_VJ18M',
                      },
                      message: {
                        type: 'string',
                        description: 'Login success message',
                        example: 'Successful login',
                      },
                    },
                  },
                },
              },
            },
            '400': {
              description: 'Invalid request data',
            },
            '401': {
              description: 'Invalid email or password',
            },
            '500': {
              description: 'Internal Server Error',
            },
          },
        },
      },
    },
  };
  
  module.exports = { annotations };
  