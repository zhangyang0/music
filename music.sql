SET NAMES UTF8;
DROP DATABASE IF EXISTS starmusic;
CREATE DATABASE starmusic CHARSET="UTF8";
USE starmusic;

/*用户列表*/
CREATE TABLE sm_user_list(
  uid INT PRIMARY KEY AUTO_INCREMENT,   #用户编号
  uname VARCHAR(32),                    #用户名
  upwd VARCHAR(32),                     #用户密码
  email VARCHAR(64),                    #用户邮箱
  phone VARCHAR(16),                    #用户电话
  gender INT                            #性别 0-女 1-男
);

/*轮播图*/
CREATE TABLE sm_carousel_item(
  cid INT PRIMARY KEY AUTO_INCREMENT,   #图片编号
  url  VARCHAR(128),                    #图片位置
  title VARCHAR(64)                     #图片标题
);

/*推荐歌单*/
CREATE TABLE sm_song_list(
  sid INT PRIMARY KEY AUTO_INCREMENT,   #歌曲编号
  sname VARCHAR(32),                    #歌曲名称
  url VARCHAR(128),                     #图片位置
  title VARCHAR(64)                     #歌单标题
)

/*播放列表*/
CREATE TABLE sm_play_list(
  pid INT PRIMARY KEY AUTO_INCREMENT,   #歌曲编号
  pname VARCHAR(32),                    #歌曲名称
  singer VARCHAR(32),                   #歌手名称
  sname VARCHAR(32)                     #专辑名称
);

/*********************/
/*****数据导入*****/
/*********************/

INSERT INTO 