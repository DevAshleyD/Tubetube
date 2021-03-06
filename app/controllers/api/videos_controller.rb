class Api::VideosController < ApplicationController

    def index
        if params[:searchQuery] == ""
            @videos = Video.all
        else
            @videos = Video.where("title ilike ?", "%#{params[:searchQuery]}%")
        end
        render :index
    end

    def show
        @video = Video.find(params[:id])
        @video.plays += 1
        @video.save
        # @video[related_videos] = get_related_videos(@video)
        render :show
    end

    def create
        @video = Video.new(video_params)
        @video.creator_id = current_user.id

        if @video.save

            render :show
        else
            render json: video.errors.full_messages
        end
    end

    def update
        @video = Video.find(params[:id])
        @video.creator_id = current_user.id
        if @video.update(video_params)
            render :show
        else
            render json: video.errors.full_messages
        end
    end

    def destroy
        @video = Video.find(params[:id])
        if @video.delete()
        else
            render json: video.errors.full_messages
        end
    end

    private

    def video_params
        params.require(:video).permit(:title,:description,:thumbnail,:video_file)
    end
end
