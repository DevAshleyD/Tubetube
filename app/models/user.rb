# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username, :session_token, uniqueness: true, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :username, format: { with: /\A[a-zA-Z0-9]+\Z/ }

    has_many :videos,
        foreign_key: :creator_id,
        class_name: "Video",
        dependent: :destroy

    has_many :comments,
        foreign_key: :author_id,
        class_name: "Comment"

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(em,pw)
        user = User.find_by(email: em)
        return nil if user.nil?
        user.is_password?(pw) ? user : nil
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom::base64
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::base64
    end

end
