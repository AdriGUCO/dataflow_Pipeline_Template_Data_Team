/* Declaración de variables para utilizar en los pipelines */

const PROJECT_ID = "lineage-alt-test";

const DS_STAGING = "dataform_template_datateam_2";

const DS_TRANSFORMATIONS = "dataform_template_datateam_2";

const DS_BI = "dataform_template_datateam_2";

const DS_ASSERTIONS = "dataform_template_datateam_2"

const PARTITION_FILTER = "TIMESTAMP_SUB(TIMESTAMP_TRUNC(CURRENT_TIMESTAMP(), HOUR), interval 2 HOUR)";

module.exports = {
  PROJECT_ID,
  DS_STAGING,
  DS_TRANSFORMATIONS,
  DS_BI,
  DS_ASSERTIONS,
  PARTITION_FILTER,
};