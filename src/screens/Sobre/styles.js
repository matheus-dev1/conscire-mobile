import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
      },
    logos: {
        marginTop: 80,
        marginLeft: 18,
        marginBottom: -2,
        width: 350,
        height: 80        
    },
    ImagemSobre: {
        width: 350,
        height: 350, 
        marginLeft: 28,
        marginTop: 10,
        marginBottom: -60
    },
    ImgTexto: {
        width: 100,
        height: 100, 
        marginLeft: 31,
        marginTop: -10
    },


    titulo: {
        color: 'white',
        fontSize: 28,
        marginTop: 20
    },

    inputEmail: {
        backgroundColor: 'white',
        width: '90%',
        marginTop: 20,
        padding: 8,
        borderRadius: 8
    },

    inputSenha: {
        backgroundColor: 'white',
        width: '90%',
        marginTop: 20,
        padding: 8,
        borderRadius: 8
    },

    btn: {
        backgroundColor: '#F09F09',
        width: '90%',
        marginTop: 20,
        padding: 8,
        borderRadius: 8,
        fontSize: 20
        
    },
    texto: {
        fontSize: 22,
        color: '#744D8C',
        textAlign: 'center',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        marginBottom: -10
    },
    textoCad: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 150,
        marginBottom: -60
    },  
    textobtn: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    btn: {
        backgroundColor: '#F09F09',
        width: '90%',
        height: '6%',
        marginTop: 50,
        marginLeft: 19,
        marginBottom: -20,
        padding: 8,
        borderRadius: 8,
        fontSize: 20
    },
})

export default styles;