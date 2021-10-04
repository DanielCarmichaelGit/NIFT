import React from "react"
import { SearchBar } from "react-native-elements";
import { StyleSheet, Dimensions, Platform } from "react-native"

const { height, width } = Dimensions.get("window")

const platformOS = Platform.OS

class NewsLetter extends React.Component {
    state = {
        Email: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Enter Your Email..."
                onChangeText={this.updateSearch}
                value={search}
                platform={platformOS}
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.inputBar}
            />
        );
    }
}

export default NewsLetter

const styles = StyleSheet.create({
    inputBar: {
        backgroundColor: `#e6e6fa`,
    },
    searchBar: {
        width: platformOS === "ios" ? width / 1.7 : width / 2.5,
        height: null,
        backgroundColor: null,
        borderBottomColor: "transparent",
        borderTopColor: "transparent"
    }
})