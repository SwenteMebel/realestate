const opdrachtenData = {
    opdrachten: [
        {
            id: 1,
            type: 'Schade Opnemen',
            plaats: 'Arnhem',
            straat: 'Velperweg',
            huisnr: '39',
            nieuweSchade: {
                moedwillig: true,
                slijtage: true,
                geweld: true,
                normaalGebruik: false,
                calamiteit: false,
                anders: 'Keuken beschadigd, slijtage en oud. Moet vervangen worden.',
            },
            datum: '13-03-2023',
            actueActie: false,
            omschrijving: 'Woning is goed, schoon en netjes onderhouden. Alleen de keuken is wel aan vervanging toe. '
        },
        {
            id: 2,
            type: 'Schade Opnemen',
            plaats: 'Eindhoven',
            straat: 'Hoofd straat',
            huisnr: '192',
            nieuweSchade: {
                moedwillig: false,
                slijtage: false,
                geweld: true,
                normaalGebruik: false,
                calamiteit: true,
                anders: ''
            },
            datum: '28-08-2023',
            actueActie: true,
            omschrijving: 'Woning schilderen, stucen, het is schoon en netjes onderhouden. '
        },

        {
            id: 3,
            type: 'Achterstallig onderhoud',
            plaats: 'Nijmegen',
            straat: 'Kijzerkarel',
            huisnr: '201',
            soortOnderhoud: {
                schilderwerk: true,
                houtrot: true,
                elektra: false,
                leidingwerk: false,
                beglazing: false,  
            },
            actueActie: false
        },

        {
            id: 4,
            type: 'Technische installatie',
            plaats: 'Apeldoorn',
            straat: 'Kervelstraat',
            huisnr: '12',
            soortInstallatie: {
                koeling: false,
                verwarming: false,
                luchtverversing: false,
                elektra: true,
                beveiliging: true,
            },
            gemeldeStoring: 'Meterkast moet vervangen worden. Ook moet er wat gedaan worden aan de beveiliging van de woning, nieuwe sloten.',
            fotoinstallatie: 'fotovandemeterkast.jpeg',
            goedGekeurd: false,
            opmerking: 'Dit moet gedaan worden voordat er nieuwe bewoners in de woning komen.'
        },

        {
            id: 5,
            type: 'Modificaties inverntarisatie',
            plaats: 'Aalten',
            straat: 'Katoen straat',
            huisnr: '193',
            uitgevoerdDoor: {
                huurder: false,
                aannemer: false,
                onbekend: true
            },
            beschrijving: 'onbekende persoon heeft radiatoren verwijderd, dit moet weer terug geplaatst worden en gekeurd worden.',
            ondernemenActie: {
                accepteren: false,
                latenKeuren: false,
                verwijderen: false,
                aanpassenEnKeuren: true
            }
        },  

    ]
}

export default opdrachtenData;