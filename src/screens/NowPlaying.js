import React, { PureComponent } from 'react';
import { 
    View, 
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import {fetchNowPlaying} from '../redux/app/movies/actions';

class MovieCard extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onPress} style={{height: 60, margin: 8, backgroundColor: '#fafafa'}}>
                <View>
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}



class NowPlaying extends PureComponent {
    componentDidMount() {
        this.props.fetchNowPlaying();
    }
    _keyExtractor = (item) => item.id.toString();
    _onPressItem = (id) => {
        console.log("Movie ", id, " Pressed");
    };

    _renderItem = ({item}) => (
        <MovieCard
            id={item.id}
            onPressItem={this._onPressItem}
            title={item.title}
        />
    )
    render() {
        return (
            <View>
                {/* {this.props.loading ? <Text>I am loading screen</Text> :  */}
                <FlatList
                    data={this.props.nowPlayingMovies}
                    extraData={this.props.nowPlayingMovies}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    onEndReachedThreshold={0}
                    onEndReached={() => this.props.fetchNowPlaying()}
                />
                {/* } */}
            </View>
        )
    }
}
const mapStateToProps = state => ({
    state: state,
    nowPlayingMovies: state.movies.nowplaying.results,
    loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchNowPlaying: () => {
    dispatch(fetchNowPlaying());
  },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NowPlaying);