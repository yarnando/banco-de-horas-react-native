export const button = {
    height: 35,
    color: '#fff',
    fontFamily: 'Lato',
    fontWeight: '100',
    backgroundColor: 'white',
    // marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,                  
}

export const buttonPrimary = {
    ...button,
    backgroundColor: '#0077b5',
}

export const buttonSuccess = {
    ...button,
    backgroundColor: '#49b009da'
}

export const buttonDanger = {
    ...button,
    backgroundColor: '#dd0909'
}

export const disabledButton = {
    backgroundColor: '#00000069'
}