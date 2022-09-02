import API from "@aws-amplify/api";

import { APIEndpoints, APIPaths } from "../../config/APIEndpoints";
import { initializeAPIOptions } from "../../utility/API";
import { fetchAuthenticatedUser } from "./UserActions";
import { loaderActions } from "./";
import { LoaderContent } from "../../utility/constants/LoaderContent";
import { async } from "validate.js";
// import { cacheS3Url } from "../../utility/image";

export const UPDATE_SERVICE_DETAILS = "UPDATE_SERVICE_DETAILS";
export const RESET_SERVICE_DETAILS = "RESET_SERVICE_DETAILS";
export const UPDATE_FREE_CALLS_INFO = "UPDATE_FREE_CALLS_INFO";
export const UPDATE_TRAINING_DETAILS = "UPDATE_TRAINING_DETAILS";

const resetServiceDetails = dispatch => {
  dispatch({ type: RESET_SERVICE_DETAILS });
};

const fetchServiceDetailsFailure = err => dispatch => {
  dispatch(loaderActions.stopAppLoader);
};

const fetchServiceDetailsSuccess = serviceDetails => dispatch => {
  // const enhancedServiceDetails = {
  //   ...serviceDetails,
  //   data: { ...serviceDetails.data, media: serviceDetails.data.media.map(el => ({ ...el, url: cacheS3Url(el.url) })) },
  // };
  dispatch(loaderActions.stopAppLoader);
  dispatch({ type: UPDATE_SERVICE_DETAILS, payload: serviceDetails.data });
};

const fetchServiceDetailsAPI = async (orgId, serviceId) => {
  const url = `${APIEndpoints.CONTRACT.endpoint}/org/${orgId}/service/${serviceId}`;
  const response = await fetch(url);
  console.log(response,'actual');
  return response.json();
};

export const fetchServiceDetails = (orgId, serviceId) => async dispatch => {
  try {
    dispatch(loaderActions.startAppLoader(LoaderContent.FETCH_SERVICE_DETAILS));
    dispatch(resetServiceDetails);
    const serviceDetails = await fetchServiceDetailsAPI(orgId, serviceId);
    dispatch(fetchServiceDetailsSuccess(serviceDetails));
  } catch (error) {
    dispatch(fetchServiceDetailsFailure(error));
    throw error;
  }
  
};

const fetchTrainingModelSuccess = serviceTrainingData => dispatch => {
  // console.log(serviceTrainingData,'action');
  dispatch({ type: UPDATE_TRAINING_DETAILS, payload: serviceTrainingData });
};

const fetchServiceTrainingDataAPI = async(orgId, serviceId, serviceDetails)=>{
  const url =`https://example-service-a.singularitynet.io:8011/servicemethoddetails`;
  // const url =`${APIEndpoints.CONTRACT.endpoint}/org/${orgId}/service/${serviceId}/serviceDetails/${serviceDetails}`;
  // const url = `${APIEndpoints.CONTRACT.endpoint}/org/${orgId}/service/${serviceId}`;
  const response = await fetch(url);
  console.log(response);
  return response.json();
};

export const fetchTrainingModel = (orgId, serviceId,serviceDetails) => async dispatch =>{
  const serviceTrainingData = await fetchServiceTrainingDataAPI(orgId, serviceId,serviceDetails);
  // const serviceTrainingData ={
  //   "dynamicpricing": [
  //     {
  //       "method": "/example_service.Calculator/add",
  //       "dynmicPricingMethod": "/example_service.Calculator/dynamic_pricing_add"
  //     },
  //     {
  //       "method": "/example_service.Calculator/train_add",
  //       "dynmicPricingMethod": "/example_service.Calculator/dynamic_pricing_train_add"
  //     }
  //   ],
  //   "training_methods": [
  //     "/example_service.Calculator/train_add",
  //     "/example_service.Calculator/train_subtraction"
  //   ]
  // }
  console.log(serviceTrainingData,'type',dispatch);
  dispatch(fetchTrainingModelSuccess(serviceTrainingData));
};

const fetchMeteringDataSuccess = usageData => dispatch => {
  dispatch({
    type: UPDATE_FREE_CALLS_INFO,
    payload: usageData.total_calls_made,
  });
};

const meteringAPI = (token, orgId, serviceId, groupId, userId) => {
  const apiName = APIEndpoints.USER.name;
  const apiPath = APIPaths.FREE_CALL_USAGE;
  const queryParams = { organization_id: orgId, service_id: serviceId, group_id: groupId, username: userId };
  const apiOptions = initializeAPIOptions(token, null, queryParams);
  return API.get(apiName, apiPath, apiOptions);
};

export const fetchMeteringData = ({ orgId, serviceId, groupId }) => async dispatch => {
  const { email, token } = await dispatch(fetchAuthenticatedUser());
  const usageData = await meteringAPI(token, orgId, serviceId, groupId, email);
  return dispatch(fetchMeteringDataSuccess(usageData));
};
