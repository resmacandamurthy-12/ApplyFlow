import pool from "../config/db.js";

/*
========================================
GET ALL APPLICATIONS
========================================
*/

export const getApplications = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM applications ORDER BY id DESC",
    );

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch applications",
    });
  }
};

/*
========================================
CREATE APPLICATION
========================================
*/

export const createApplication = async (req, res) => {
  try {
    const {
      company,
      role,
      location,
      applicationLink,
      appliedDate,
      deadline,
      status,
      notes,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO applications
      (
        company,
        role,
        location,
        application_link,
        applied_date,
        deadline,
        status,
        notes
      )

      VALUES
      ($1,$2,$3,$4,$5,$6,$7,$8)

      RETURNING *
      `,
      [
        company,
        role,
        location,
        applicationLink,
        appliedDate,
        deadline,
        status,
        notes,
      ],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create application",
    });
  }
};

/*
========================================
UPDATE APPLICATION
========================================
*/

export const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      company,
      role,
      location,
      applicationLink,
      appliedDate,
      deadline,
      status,
      notes,
    } = req.body;

    const result = await pool.query(
      `
      UPDATE applications

      SET

      company=$1,
      role=$2,
      location=$3,
      application_link=$4,
      applied_date=$5,
      deadline=$6,
      status=$7,
      notes=$8

      WHERE id=$9

      RETURNING *
      `,
      [
        company,
        role,
        location,
        applicationLink,
        appliedDate,
        deadline,
        status,
        notes,
        id,
      ],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update application",
    });
  }
};

/*
========================================
DELETE APPLICATION
========================================
*/

export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM applications WHERE id=$1 RETURNING *",
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    res.status(200).json({
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete application",
    });
  }
};
