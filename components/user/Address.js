import { useNavigation } from "@react-navigation/native";
import { use, useEffect, useRef, useState } from "react";
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Keyboard } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Address({isMain}) {
    const [selectedType, setSelectedType] = useState('delivery');
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [sugguestions, setSuggestions] = useState([]);
    const navigation = useNavigation();
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [editable, setEditable] = useState(false);
    const shouldFetch = useRef(true);

    const handleChangeText = (query) => {
        setQuery(query);
    }

    const handleFetchAddress = async (query) => {
    setLoading(true);
    try {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&countrycodes=vn&limit=5&addressdetails=1`;
        console.log(url)
        const res = await fetch(url, {
            method: "GET",
            headers: {
                // Nominatim yêu cầu bạn cung cấp tên app + email để liên hệ nếu cần
                "User-Agent": "FoodApp/1.0 (lhphuc.2410@gmail.com)",
                "Accept-Language": "vi",
            }
        });

        const data = await res.json();
        setSuggestions(data);
        console.log(data);
    } catch (error) {
        console.error("Fail to fetch data", error);
    } finally {
        setLoading(false);
    }
};


    function formatAddress(address) {
        const detail = address.address[address.addresstype];
        const {
            house_number,
            road,
            quarter,
            city_district,
            city,
            village,
            county,
            country,
        } = address.address;

        const street = [house_number, road].filter(Boolean).join(" ");

        return [
            detail,
            street,
            road,
            quarter,
            city_district,
            city  || village,
            county,
            country,
        ]
            .filter(Boolean) // loại bỏ undefined/null
            .join(", ");
    }


    const handleSelect = (sugguest) => {
        shouldFetch.current = false;
        setQuery(sugguest.display_name);
        setSelectedAddress(sugguest)
        setSuggestions([])
        setEditable(false);
        Keyboard.dismiss();
    }

    const SugguestItem = ({sugguest}) => {
        return (
            <TouchableOpacity 
            onPress={() => handleSelect(sugguest)}
            style= {styles.sugguestItem}>
                <Ionicons style= {styles.addressIcon} name="location" />
                <Text style= {styles.sugguestText}>{formatAddress(sugguest)}</Text>
            </TouchableOpacity>
        )
    }
    

    useEffect( () => {
        const timer = setTimeout(() => {
            if (!shouldFetch.current) {
                shouldFetch.current = true;
                return;
            }
            if(query.length >= 6) {
                handleFetchAddress(query)
            } else {
                setSuggestions([]);
            }
        }, 500
        )
        return () => clearTimeout(timer);
    }, [query])

    return (
        <><View style={styles.container}>
            {/* ---Address--- */}
            <View style={styles.addressContainer}>
                <View style={styles.shippingTypeContainer}>
                    <TouchableOpacity
                        onPress={() => setSelectedType('delivery')}
                        style={styles.shippingContainer}>
                        <Ionicons
                            style={[styles.shippingIcon,
                            selectedType === 'delivery' && styles.selected
                            ]}
                            name='bicycle' />
                        <Text style={[styles.shippingText,
                        selectedType === 'delivery' && styles.selected
                        ]}>Giao tận nơi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSelectedType('pickup')}
                        style={styles.shippingContainer}>
                        <Ionicons
                            style={[styles.shippingIcon,
                            selectedType === 'pickup' && styles.selected
                            ]}
                            name='bag' />
                        <Text style={[styles.shippingText,
                        selectedType === 'pickup' && styles.selected
                        ]}>Đặt đến lấy</Text>
                    </TouchableOpacity>
                </View>
                {isMain ? (
                    <TouchableOpacity
                    onPress={() => navigation.navigate("Store")}
                    style={styles.address}>
                    <Ionicons style={styles.addressIcon} name="location" />
                    <Text style={styles.addressText}>97 Man Thiện</Text>
                    <View style={styles.editIcon} />
                </TouchableOpacity>
                ) : (<View
                    style={styles.address}>
                    <Ionicons style={styles.addressIcon} name="location" />
                    <TextInput
                        style={styles.addressText}
                        placeholder="Nhập địa chỉ của bạn"
                        value={query}
                        onChangeText={(query) => {
                            handleChangeText(query);
                        } }
                        onFocus={() => {
                            setEditable(true);
                        }}
                    />
                   {editable ? (
                    <TouchableOpacity 
                    onPress={() => {
                        setQuery("")
                    }}>
                        <Ionicons style={styles.editIcon} name="close" />
                    </TouchableOpacity>
                   ): (
                    <View style={styles.editIcon} />
                   ) }
                </View>)}
                
            </View>
        </View>
        {!isMain && (
            <FlatList 
            data={sugguestions}
            keyExtractor={(item) => item.place_id.toString()}
            renderItem={({item}) => (
                <SugguestItem sugguest= {item} />
            )}
            keyboardShouldPersistTaps= "handled"
            />
        )}
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: 'red',
        paddingBottom: 20
    },
    userContainer: {
        height: 'auto',
        flexDirection: "row",
        padding: 20,
        alignItems: 'center'
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginRight: 20,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff'
    },
    addressContainer: {
        backgroundColor: '#fff',
        borderRadius: 6,
        marginHorizontal: 10
    },
    shippingTypeContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    shippingContainer: {
        padding: 5,
        alignItems: 'center'
    },
    shippingIcon: {
        fontSize: 16,
        fontWeight: '500',
        paddingBottom: 5
    },
    shippingText: {
        fontSize: 16,
        fontWeight: 500
    },
    address: {
        flexDirection: 'row',
        alignItems: "center",
        fontSize: 18,
        paddingHorizontal: 10,
        justifyContent: "space-between",
        paddingVertical: 10
    },
    addressIcon: {
        color: 'red',
        paddingRight: 5 ,
        fontSize: 16,
    },
    addressText: {
        width: '85%',
        fontSize: 16,

    },
    editIcon: {
        fontSize: 16,
    },
    selected: {
        color: 'red',
        fontWeight: 'bold',
    }, 
    sugguestItem: {
        flexDirection: "row",
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        margin: 10
    },
    sugguestText: {

    }
})