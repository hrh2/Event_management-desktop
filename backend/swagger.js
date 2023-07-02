const annotations = {
    openapi: '3.0.0',
    info: {
      title: 'EventConnect APIs',
      version: '1.0.0',
      description: 'API for Event management System',
      contact: {
        name: 'Hirwa Rukundo Hope',
        email: 'gakundohope5@gmail.com',
        url: 'https://www.instagram.com/__.hirwa.__2/',
      },
      social: {
        instagram: 'https://www.instagram.com/__.hirwa.__2/',
      },
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
  components: {
    schemas: {
      Venue: {
        type: 'object',
        properties: {
          name: { type: 'string', required: true },
          address: { type: 'string', required: true },
          capacity: { type: 'number', required: true },
          amenities: { type: 'array', items: { type: 'string' } },
          offers: { type: 'array', items: { type: 'string' } },
          imageUrls: { type: 'array', items: { type: 'string' } },
        },
      },
      Event: {
        type: 'object',
        properties: {
          name: { type: 'string', required: true },
          date: { type: 'string', format: 'date', required: true },
          time: { type: 'string', required: true },
          venue: { type: 'string', required: true },
          ticketPrices: { type: 'array', items: { type: 'number' }, required: true },
          description: { type: 'string' },
          imageUrls: { type: 'array', items: { type: 'string' } },
        },
      },
    },
  },
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
      '/v1/api/store/venues': {
        get: {
          tags: ["Meeting","Wedding"],
          summary: 'Get all venues',
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Venue',
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ["Meeting", "Wedding"],
          summary: 'Create a new venue',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Venue',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Created',
            },
          },
        },
      },
      '/v1/api/store/venues/{id}': {
        get: {
          tags: ["Meeting", "Wedding"],
          summary: 'Get a venue by ID',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the venue',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Venue',
                  },
                },
              },
            },
          },
        },
        put: {
          tags: ["Meeting", "Wedding"],
          summary: 'Update a venue',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the venue',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Venue',
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'OK',
            },
          },
        },
      },
      '/v1/api/store/events': {
        get: {
          tags: ["Event"],
          summary: 'Get all events',
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: {
                      $ref: '#/components/schemas/Event',
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ["Event"],
          summary: 'Create a new event',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Event',
                },
              },
            },
          },
          responses: {
            '201': {
              description: 'Created',
            },
          },
        },
      },
      '/v1/api/store/events/{id}': {
        get: {
          tags: ["Event"],
          summary: 'Get an event by ID',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the event',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          responses: {
            '200': {
              description: 'OK',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Event',
                  },
                },
              },
            },
          },
        },
        put: {
          tags: ["Event"],
          summary: 'Update an event',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID of the event',
              required: true,
              schema: {
                type: 'string',
              },
            },
          ],
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Event',
                },
              },
            },
          },
          responses: {
            '200': {
              description: 'OK',
            },
          },
        },
      },
    },
  };
  
  module.exports = { annotations };
  