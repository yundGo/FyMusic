import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image, Text, Progress } from '@tarojs/components';
import './index.scss';
import avatar from '../../assets/img/avatar.jpg';

export default class Player extends Taro.Component {
  render() {
    return <View className="player-index">
				{/* 头像 */}
				<Image className="avatar" src={avatar} />
				{/* 控制台 */}
				<View className="console">
					<View className="top">
						{/* 歌曲信息 */}
						<View className="info">
							<Text className="song">Another Ghost</Text>
							<Text className="singer">齋藤飛鳥</Text>
						</View>
						{/* 操作行为 */}
						<View className="action">
							<View className="iconfont icon-xiai" />
						</View>
					</View>
					{/* 进度条 */}
					<Progress className="progress" percent={80} strokeWidth={2} active activeColor="red" />
					{/* 控制按钮 */}
					<View className="btn">
						<View className="iconfont icon-suiji" />
						<View className="iconfont icon-kuaitui" />
						<View className="iconfont icon-bofang" style="font-size: 42px" />
						<View className="iconfont icon-kuaijin" />
						<View className="iconfont icon-liebiao" />
					</View>
				</View>
			</View>;
  }
}