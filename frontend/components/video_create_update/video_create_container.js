import React from 'react';
import { connect } from 'react-redux';
import VideoForm from './video_form';
import { createVideo } from "../../actions/video_actions";

const mapSTP = state => ({
    formType: "Upload Video",
    video: {
        title: "",
        description: "",
        creator_id: undefined,
        thumbnailFile: null,
        videoFile: null
    },
    currentUserId: state.session.id
})

const mapDTP = dispatch => ({
    action: video => dispatch(createVideo(video))
})

export default connect(mapSTP,mapDTP)(VideoForm);