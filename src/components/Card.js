import React, { PureComponent } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const SIZE = `w780`;

export default class MovieCard extends PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };
    render() {
        return (
            <View style={styles.cardContainer}>
                <View style={styles.backgroundImageContainer}>
                    <Image style={{flex: 1, resizeMode: 'cover', resizeMethod: 'scale', borderRadius: 15}} source={{ uri: `${BASE_URL}${SIZE}/${this.props.movie.backdrop_path}` }}/>
                </View>
                <View style={styles.contentContainer}>
                    <TouchableOpacity onPress={this._onPress} style={styles.touchableArea}>
                        <View style={styles.popularityContainer}>
                            <Text style={styles.popularityStyle}>
                                {`RATING: ${this.props.movie.vote_average}`}
                            </Text>
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleStyle}>
                                {this.props.movie.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 15,
        height: 413,
        backgroundColor: '#F2F2F2',
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 13,
    },
    titleStyle: {
        fontSize: 23,
        fontWeight: '600',
        lineHeight: 33,
        letterSpacing: 0.45,
        color: '#ffffff'
    },
    titleContainer: {
        width: 200,
    },
    popularityContainer: {
        opacity: 0.9
    },
    popularityStyle: {
        letterSpacing: 0.9,
        lineHeight: 32,
        fontSize: 15,
        color: '#ffffff',
        fontWeight: '600',
    },
    backgroundImageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    contentContainer: {
        paddingLeft: 16,
        paddingTop: 8
    },
    touchableArea: {
        width: '100%',
        height: '100%',
    }
});