import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ListRenderItem , Image} from 'react-native';
import { sportsMenus } from "../services/db"
import { Colors } from '@/constants/Colors';

interface MenuItem {
    id: string;
    label: string;
    tag?: string;
    isArrow?: boolean;
    image: string;
}
const data: MenuItem[] = sportsMenus
const SportsCategoriesListItem: React.FC = () => {
    const renderItem: ListRenderItem<MenuItem> = ({ item }) => {
        return (
            <TouchableOpacity style={styles.menuItem}>
                <View style={styles.tagWrapper}>
                   <Image source={{uri: item.image}} style={styles.image}/>
                </View>
                <View style={styles.menuTextContainer}>
                    <Text style={styles.menuText}>{item.label}</Text>
                </View>
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: Colors.darkGray    
    },
    scrollContainer: {
        alignItems: 'center',
    },
    image:{
        height: 20,
        width: 20,
    },
    menuItem: {
        marginRight: 20,
        justifyContent: 'center',
    },
    menuTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 20,
    },
    menuText: {
        color: Colors.white,
        fontSize: 12,
        fontWeight: 'medium',
        textAlign: 'center',
    },
    tagContainer: {
        paddingVertical: 2,
        paddingHorizontal: 6,
    },
    tagText: {
        color: 'white',
        fontSize: 6,
        fontWeight: 'bold',
    },
    tagWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default SportsCategoriesListItem;