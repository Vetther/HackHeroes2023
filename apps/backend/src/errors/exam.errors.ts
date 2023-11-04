import { HttpException } from '@nestjs/common';

export class TimeOut extends HttpException {
  constructor() {
    super(
      {
        statusCode: 400,
        timestamp: new Date().toISOString(),
        path: 'api/v1/exam',
        message: 'Time out',
      },
      400,
    );
  }
}

export class ExamAlreadySolved extends HttpException {
  constructor() {
    super(
      {
        statusCode: 400,
        timestamp: new Date().toISOString(),
        path: 'api/v1/exam',
        message: 'Exam already solved',
      },
      400,
    );
  }
}

export class ExamNotFound extends HttpException {
  constructor() {
    super(
      {
        statusCode: 404,
        timestamp: new Date().toISOString(),
        path: 'api/v1/exam',
        message: 'Exam not found',
      },
      404,
    );
  }
}
