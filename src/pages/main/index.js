import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'
import bgimg from '../../assets/img/bg.jpg'
import Player from '../../components/Player/index'

export default class Index extends Component {
	config = {
		navigationBarTitleText: 'FyMusic'
	}

	componentWillMount() { }

	componentDidMount() { }

	componentWillUnmount() { }

	componentDidShow() { }

	componentDidHide() { }

	render() {
		return (
			<View className='player'>
				<Image className="bgimg" src={bgimg} ></Image>
				<View className='main'>
					<Player />
					<View style="width:100%;height:100%;background-color:#fff;margin-top:-10px" />
				</View>
			</View>
		)
	}
}