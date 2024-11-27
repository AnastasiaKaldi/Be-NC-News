const endpointsJson = require("../endpoints.json");
const request = require("supertest");
const seed = require("../db/seeds/seed");
const app = require("../db/app");
const db = require("../db/connection");
/* Set up your test imports here */
const {
  topicData,
  userData,
  articleData,
  commentData,
} = require("../db/data/test-data/index");

/* Set up your beforeEach & afterAll functions here */
beforeAll(() => {
  return seed({ topicData, userData, articleData, commentData });
});

afterAll(() => {
  db.end();
});

describe("GET /api", () => {
  test("200: Responds with an object detailing the documentation for each endpoint", () => {
    return request(app)
      .get("/api")
      .expect(200)
      .then(({ body: { endpoints } }) => {
        expect(endpoints).toEqual(endpointsJson);
      });
  });
});

describe("GET /api/topics", () => {
  test("200: Responds with an array of topic objects, each having slug and description ", () => {
    return request(app)
      .get("/api/topics")
      .expect(200)
      .then(({ body }) => {
        expect(body.topics).toBeInstanceOf(Array);
        expect(body.topics).toHaveLength(3);
        body.topics.forEach((topic) => {
          expect(topic).toEqual(
            expect.objectContaining({
              slug: expect.any(String),
              description: expect.any(String),
            })
          );
        });
      });
  });
});

describe("GET /api/articles/:article_id", () => {
  test("200: should return an article with the specified article_id", () => {
    const article_id = 1;

    return request(app)
      .get(`/api/articles/${article_id}`)
      .expect(200)
      .then(({ body }) => {
        expect(body.article).toBeDefined();
        const { article } = body;
        expect(typeof article.article_id).toBe("number");
        expect(typeof article.title).toBe("string");
        expect(typeof article.author).toBe("string");
        expect(typeof article.topic).toBe("string");
        expect(typeof article.created_at).toBe("string");
        expect(typeof article.body).toBe("string");
      });
  });
});

describe("GET /api/articles", () => {
  test("200: Responds with an array of articles", () => {
    return request(app)
      .get("/api/articles")
      .expect(200)
      .then(({ body: { articles } }) => {
        expect(articles).toBeInstanceOf(Array);
        expect(articles).toHaveLength(13);
        articles.forEach((article) => {
          expect(article).toEqual(
            expect.objectContaining({
              article_id: expect.any(Number),
              title: expect.any(String),
              author: expect.any(String),
              topic: expect.any(String),
              created_at: expect.any(String),
              votes: expect.any(Number),
              article_img_url: expect.any(String),
              comment_count: expect.any(Number),
            })
          );
        });
      });
  });
});

describe("GET /api/articles/:article_id/comments", () => {
  test("200: Responds with an array of comments for the given article_id", () => {
    return request(app)
      .get("/api/1/comments")
      .expect(200)
      .then(({ body: { comments } }) => {
        expect(comments).toBeInstanceOf(Array);
        expect(comments).toHaveLength(11);
        comments.forEach((comment) => {
          expect(comment).toEqual(
            expect.objectContaining({
              comment_id: expect.any(Number),
              votes: expect.any(Number),
              created_at: expect.any(String),
              author: expect.any(String),
              body: expect.any(String),
              article_id: expect.any(Number),
            })
          );
        });
      });
  });
});
