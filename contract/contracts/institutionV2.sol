// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

/**
 * @title SchoolSync
 * @author 3illBaby | Team 4
 * @notice This contract is still in development
 */

import {StudentManager} from "./StudentManager.sol";
import {AdminManager} from "./AdminManager.sol";

contract InstitutionV2 is StudentManager, AdminManager {
  /* ==============================================================
                           STRUCTS
    ==============================================================*/

  /** solely used for uploading documents */
  struct DocumentWithId {
    string studentId;
    Document document;
  }
  /**StudentCourseData */
  struct CourseWithId {
    string id;
    Course course;
  }

  /* ==============================================================
                              STATE
    ==============================================================*/
  string public instiutionName;
  address private immutable Owner;

  modifier adminOrOwner() {
    require(msg.sender == Owner || s_adminProfile[msg.sender].adminAddress == msg.sender, "not an owner or admin");
    _;
  }

  constructor(string memory name) {
    Owner = msg.sender;
    instiutionName = name;
  }

  function uploadStudentsIdsAndDocuments(string[] calldata ids, DocumentWithId[] calldata documents) external {
    uploadStudentIds(ids);
    uploadStudentsDocument(documents);
  }

  function uploadStudentsDocument(DocumentWithId[] calldata documents) public adminCompliance {
    for (uint i; i < documents.length; i++) {
      s_studentDocument[documents[i].studentId].push(documents[i].document);
    }
  }

  function uploadStudentIds(string[] calldata ids) public adminCompliance {
    for (uint i; i < ids.length; i++) {
      s_studentStatus[ids[i]] = StudentStatus.UNREGISTERED;
    }
  }

  function uploadAcademicData(
    uint8 level,
    Semester semester,
    CourseWithId[] calldata courses
  ) external adminCompliance {
    if (semester == Semester.FIRST) {
      for (uint i; i < courses.length; i++) {
        Session[] storage session = s_studentAcademicData[courses[i].id];
        /**level > session legth indicates a missing session */
        if (level > session.length) revert();
        /**level == session length assumes a new session is implied */
        if (level == session.length) session.push();
        session[level].firstSemester.push(courses[i].course);
      }
    } else {
      for (uint i; i < courses.length; i++) {
        Session[] storage session = s_studentAcademicData[courses[i].id];
        /**new session cannot be created in second semester */
        if (level >= session.length) revert();
        session[level].secondSemester.push(courses[i].course);
      }
    }
  }

  function getStudentData() external view returns (Student memory, Document[] memory, Session[] memory) {
    string memory id = s_addressToId[msg.sender];
    return _getStudentData(id);
  }

  function getStudentDataFor(
    string calldata studentId
  ) external view adminCompliance returns (Student memory, Document[] memory, Session[] memory) {
    return _getStudentData(studentId);
  }
}
