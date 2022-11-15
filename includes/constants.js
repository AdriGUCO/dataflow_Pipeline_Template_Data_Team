/* Declaración de variables para utilizar en los pipelines */

const PROJECT_ID = "lineage-alt-test";

const DS_STAGING = "dataform_template_datateam";

const DS_TRANSFORMATIONS = "dataform_template_datateam";

const DS_DESTINATION = "dataform_template_datateam";

const DS_ASSERTIONS = "dataform_template_datateam"

const PARTITION_FILTER_FLUJO = "TIMESTAMP_SUB(TIMESTAMP_TRUNC(CURRENT_TIMESTAMP(), HOUR), interval 2 HOUR)";

const PARTITION_FILTER_FLUJO_DAILY = "TIMESTAMP_SUB(TIMESTAMP_TRUNC(CURRENT_TIMESTAMP(), DAY), interval 2 DAY)";

// const PARTITION_FILTER_FLUJO = "TIMESTAMP("2019-01-01")";

// const PARTITION_FILTER_FLUJO_DAILY = "TIMESTAMP("2019-01-01")";

module.exports = {
  PROJECT_ID,
  DS_STAGING,
  DS_TRANSFORMATIONS,
  DS_DESTINATION,
  DS_ASSERTIONS,
  PARTITION_FILTER_FLUJO,
  PARTITION_FILTER_FLUJO_DAILY,
};