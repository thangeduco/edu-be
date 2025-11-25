// LM/repos/lm-worksheet-submission.repo.ts

import { LmWorksheetSubmission } from '../models/WorksheetModels';

/**
 * Repository interface cho lm_worksheet_submission
 * - Quản lý tạo, truy vấn và cập nhật bài nộp worksheet
 * - Tách rõ use case cho học sinh (student) và cho giáo viên (teacher)
 */
export interface IWorksheetSubmissionRepository {
  // //////////////////////// STUDENT SUBMISSIONS start/////////////////////////////////////////////

  /** Tạo bài nộp mới cho học sinh */
  createSubmission(
    sub: Omit<LmWorksheetSubmission, 'id' | 'submittedAt' | 'gradedAt'>,
  ): Promise<LmWorksheetSubmission>;

  /** Lấy thông tin một bài nộp theo id */
  findById(id: number): Promise<LmWorksheetSubmission | null>;

  /** Danh sách bài nộp của 1 học sinh (option: lọc theo worksheet) */
  listStudentSubmissions(
    studentId: number,
    worksheetId?: number,
  ): Promise<LmWorksheetSubmission[]>;

  // //////////////////////// STUDENT SUBMISSIONS end/////////////////////////////////////////////

  // //////////////////////// TEACHER VIEW start/////////////////////////////////////////////

  /** Danh sách bài nộp dành cho giáo viên để chấm / theo dõi */
  listForTeacher(filter: {
    teacherId: number;
    status?: string;
  }): Promise<LmWorksheetSubmission[]>;

  /** Cập nhật bài nộp (điểm, nhận xét, trạng thái, ...) */
  updateSubmission(sub: LmWorksheetSubmission): Promise<void>;

  // //////////////////////// TEACHER VIEW end/////////////////////////////////////////////
}