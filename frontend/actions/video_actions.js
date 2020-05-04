export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
import * as VideoAPIUtil from '../util/video_api_util';

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
})

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
})

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
})

export const fetchVideos = () => dispatch => VideoAPIUtil.fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)))

export const fetchVideo = videoId => dispatch => VideoAPIUtil.fetchVideo(videoId)
    .then(video => dispatch(receiveVideo(video)))

export const createVideo = video => dispatch => VideoAPIUtil.createVideo(video)
    .then(video => dispatch(receiveVideo(video)))

export const updateVideo = video => dispatch => VideoAPIUtil.updateVideo(video)
    .then(video => dispatch(receiveVideo(video)))

export const deleteVideo = video => dispatch => VideoAPIUtil.deleteVideo(video)
    .then(() => dispatch(removeVideo(video)))