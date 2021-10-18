let contract_card_details = [
        {
          contract_title: "AGB Amazon",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      eid: "s1",
                      statement:
                        "Unter welchem Namen betreiben Sie Ihren Amazon-Shop?",
                      type: "textfield",
                      length: 1,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Handelt es sich bei dem Vertragspartner des Kunden um eine natürliche oder juristische Person?",
                      type: "dropselect",
                      length: 2,
                      value: "",
                      choices: ["Natürliche Person", "Juristische Person"],
                      dropselect_display: true,
                      textfieldapproval: false,
                      fields_display: false,
                      ishelp: false,
                      dropselect: [
                        {
                          tiptapedit: false,
                          on_which_to_show: "Natürliche Person",
                          eid: "s2-ms1",
                          statement:
                            "Wer soll Vertragspartner des Kunden werden?",
                          type: "dropselect",
                          length: 2,
                          value: "",
                          choices: ["keine Angabe", "Frau", "Herr"],
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      eid: "s3",
                      statement: "Wer soll Vertragspartner des Kunden werden?",
                      type: "textfield",
                      length: 6,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      fields: [
                        {
                          eid: "s3-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s3-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s3-ms3",
                          line: "Strasse",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s3-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s3-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-2",
                        },
                        {
                          eid: "s3-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s3-ms7",
                          line: "Email",
                          value: "",
                          size: "col-5",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      fields_display: true,

                      eid: "s1",
                      statement:
                        "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insb. hins. des Preises)",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Hiervon ist abhängig, wann der Vertragsschluss zustande kommt. Sind Ihre Angebote bereits bindend, kommt der Vertragsschluss mit der Bestellung durch den Kunden zustande. Wir empfehlen grundsätzlich die Angebote als nicht bindend einzuordnen, da Sie sich hiermit die Möglichkeit offenhalten, Bestellungen aus verschiedensten Gründen (z.B. Lieferengpass etc.) nicht zu bestätigen",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                    {
                      tiptapedit: false,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      eid: "s2",
                      statement:
                        "Bieten Sie dem Kunden die „1-Click Bestellfunktion“ an?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      eid: "s3",
                      statement: "Erhält der Kunde eine Eingangsbestätigung?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      eid: "s4",
                      statement:
                        "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Sprache wählen",
                          line: "Sprache wählen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Keine weitere Sprache",
                          line: "Keine weitere Sprache",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms3",
                          on_which_to_show: "Sprache wählen", // will have to look on which to show
                          line: "Sprache auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      fields_display: true,
                      eid: "s5",
                      statement: "Erfolgt eine Speicherung des Vertragstextes?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sie sind nicht verpflichtet den Vertragstext zu speichern. Sofern Sie dies jedoch tun, muss der Kunde in den AGB hierüber informiert werden",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s5-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s5-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                      dropselect_display: true,
                      dropselect: [
                        {
                          tiptapedit: false,
                          on_which_to_show: "Ja",
                          eid: "s5-ms3",
                          statement:
                            "Wie lange wird der Vertragstext gespeichert?",
                          type: "dropselect",
                          length: 2,
                          value: "",
                          choices: [
                            ". 2 Jahre",
                            ". 5 Jahre ",
                            ". 10 Jahre ",
                            ". Abweichende Speicherdauer ",
                          ],
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      eid: "s6",
                      statement:
                        "Wie wird dem Kunden der Vertragstext zugänglich gemacht?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s6-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      eid: "s7",
                      statement:
                        "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s7-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      fields_display: true,

                      eid: "s8",
                      statement:
                        "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Dies ist eine Information, die Sie dem Kunden laut Gesetz erteilen müssen. Sofern der Vertragsschluss über den normalen amazon-Ablauf zustande kommt, empfehlen wir die folgende Auswahl:",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s8-ms1",
                          value:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                          line:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                        {
                          tiptapedit: false,
                          eid: "s8-ms2",
                          value: "Sonstiges",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s8-ms3",
                          on_which_to_show: "Sonstiges", // will have to look on which to show
                          line: "",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  name_edit:false,
                  total_fields: 4,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,

                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Enthalten die Preise jeweils die gültige gesetzliche Umsatzsteuer?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile. Hierzu sind Sie nur dann nicht verpflichtet, wenn Sie Kleinunternehmer iSd §19 UstG sind.",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                          line:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Kleinunternehmer iSd § 19 UstG",
                          line: "Kleinunternehmer iSd § 19 UstG",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,

                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Fallen Liefer- oder Versandkosten an? Wenn ja, wie hoch sind diese?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          line: "Höhe auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,

                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Hat der Kunde im Falle eines Widerrufs die Kosten für eine Rücksendung zu tragen?",
                      type: "radio",
                      length: 2,
                      ishelp: true,
                      ishelpstatement:
                        "Laut Gesetz trägt grundsätzlich der Verbraucher die Kosten der Rücksendung, sofern der Unternehmer diesen über diese Kostentragungspflicht unterrichtet hat. Dies gilt dann nicht, wenn der Unternehmer sich ausdrücklich dazu bereit erklärt hat die Kosten zu tragen.",
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,

                      eid: "s1",
                      statement:
                        "Wollen Sie die versandten Produkte bis zur vollständigen Zahlung in Ihrem Eigentum behalten?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: true,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "<h2>Europäische Streitschlichtungsplattform</h2>",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      ishelp: false,
                      fields_display: true,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "<h2>Schlussbestimmungen<h2>",
                  name_edit:false,
                  total_fields: 2,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      ishelp: false,
                      fields_display: true,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                    {
                      tiptapedit: false,
                      dropselect_display: false,
                      ishelp: false,
                      fields_display: true,
                      eid: "s2",
                      statement:
                        "Unterliegen Sie speziellen Verhaltenskodizies?",
                      type: "radio",
                      length: 2,
                      value: "",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          statement:
                            "Unternehmenseigene oder sonstige Verhaltenskodizies (Name Zweck, ggf. Domain zum Text des Verhaltenskodexes)",
                          line: "Verhaltenskodizies",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Signature",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                  type :"signature_card",
                  section:[],
                },                
              ],
            },
            rightSide: {
              title: "Allgemeine Geschäftsbedingungen",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display: "[[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: center; font-weight: 700; font-size: 18.72px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Vertragspartner",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s2-ms1",
                        "s3-ms1",
                        "s3-ms2",
                        "s3-ms3",
                        "s3-ms4",
                        "s3-ms5",
                        "s3-ms6",
                        "s3-ms7",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            "Vertragspartner des Kunden für die über den Amazon Shop [[0]] abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            { "s2-ms1": ["Frau", "Herr"] },
                            "s3-ms1",
                            "s3-ms2",
                          ],
                          display: " [[0]]  [[1]] [[2]]",
                        },
                      ],
                      values_on_which_depend: ["s3-ms1", "s3-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3", "s3-ms4"],
                          display: " [[0]]  [[1]] ",
                        },
                      ],
                      values_on_which_depend: ["s3-ms3", "s3-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms5", "s3-ms6","s3-ms7"],
                          display: " [[0]]  [[1]] [[2]] ",
                        },
                      ],
                      values_on_which_depend: ["s3-ms5", "s3-ms6" , "s3-ms7"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Vertragsschluss",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1",
                        "s2",
                        "s3",
                        "s4",
                        "s5",
                        "s6-ms1",
                        "s7-ms1",
                        "s8",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die im Rahmen von Amazon vorgebrachten Angebote des Anbieters stellen verbindliche Angebote zum Abschluss eines Kaufverträges dar.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde kann die einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse gehen“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen. Anschließend gibt der Kunde über den Button „Jetzt kaufen“ ein verbindliches Angebot zum Abschluss eines Kaufverträges an den Anbieter ab.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der Amazon Europe Core S.à r.l. (Société à responsabilité limitée): https://www.amazon.de/gp/help/customer/display.html?ie=UTF8&nodeId=201909000&ref_=footer_cou.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die bei Amazon eingestellten Produktseiten des Anbieters stellen unverbindliche Aufforderungen zum Abschluss eines Kaufverträges dar.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Des Weiteren kann der Kunde durch die Betätigung des Buttons „Jetzt mit 1-Click® kaufen“ unmittelbar von der Produktdetailseite aus ein verbindliches Angebot zum Abschluss eines Kaufverträges abgeben.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die Annahme des Angebots erfolgt durch eine E-Mail der Amazon Europe Core S.à r.l., welche den Versand der Ware bestätigt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    //Als Vertragssprache stehen deutsch, zur Verfügung.
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s4-ms3"],
                          display:
                            "Als Vertragssprache stehen deutsch ,[[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Sprache wählen" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Die Vertragssprache ist Deutsch.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Keine weitere Sprache" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            {
                              "s5-ms3": [
                                ". 2 Jahre",
                                ". 5 Jahre ",
                                ". 10 Jahre ",
                              ],
                            },
                          ],
                          display:
                            "Der Vertragstext wird im Anschluss an den Vertragsschluss vom Anbieter gespeichert. Die Speicherung erfolgt für [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5% display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertragsschluss wird vom Anbieter nicht gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s6-ms1"],
                          display:
                            "Der Kunde erhält den Vertragstext über [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s6-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s7-ms1"],
                          display:
                            "Der Vertragstext ist dem Kunden auch im Anschluss an den Vertragsschluss noch über [[0]] zugänglich.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s7-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Rahmen des Vertragsschlusses über den amazon-Warenkorb kann der Kunde seine Daten, nachdem er diese in das amazon-Formular eingegeben hat jederzeit löschen oder die Löschung der eingegebenen Daten durch das Schließen des Browsers erreichen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s8:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " Im Rahmen der „1-Click“-Bestelloption kann der Bestellvorgang über die Zurück-Funktion oder das Schließen des Browsers abgebrochen werden.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s8:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s8-ms3"],
                          display: "[[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s8: "Sonstiges" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Bezahlung</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s2", "s3", "s4"],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            " Als Zahlungsart steht/stehen dem Kunden [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die für die Waren angegebenen Preise enthalten die jeweils gültige gesetzliche Mehrwertsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s2:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Aufgrund der Kleinunternehmereigenschaft des Anbieters iSd § 19 UstG enthalten die angegebenen Preise keine Mehrwertsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        { s2: "Kleinunternehmer iSd § 19 UstG" },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3"],
                          display:
                            "Die Versandkosten betragen [[0]] je Bestellung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Wir liefern versandkostenfrei.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde hat im Falle eines Widerrufs die unmittelbaren Kosten der Rücksendung zu tragen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Eigentumsvorbehalt",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Bis zur vollständigen Bezahlung verbleiben die gelieferten Waren im Eigentum des Anbieters.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Gewährleistung",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "<h2>Europäische Streitschlichtungsplattform</h2>",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2>Europäische Streitschlichtungsplattform</h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "<h2>Schlussbestimmungen<h2>",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2>Schlussbestimmungen<h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbesondere des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Speziellen Verhaltenskodizies unterliegen wir nicht.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms3"],
                          display:
                            "Wir unterliegen den folgenden Verhaltenskodizies: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Signature",
                  section_inner_value_counter_greater_than_one:false,
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "AGB Shopify",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  isedited: false,
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  name_edit:false,
                  total_fields: 7,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: false,
                      ishelp: false,
                      tiptapedit: false,
                      value: "",
                      eid: "s1",
                      statement:
                        "Wer soll Vertragspartner des Kunden werden? (Vorname, Nachname [bei juristischen Personen: Name und Rechtsform], Adresse, PLZ, Ort)",
                      type: "dropselect",
                      length: 1,
                      choices: ["keine Angabe", "Frau", "Herr"],
                      fields: [],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement: "",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s2-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s2-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s2-ms3",
                          line: "Strasse",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s2-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                       {
                          eid: "s2-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-2",
                        },
                        {
                          eid: "s2-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s2-ms7",
                          line: "Email",
                          value: "",
                          size: "col-5",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  name_edit:false,
                  total_fields: 6,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insb. hins. des Preises)",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Sprache wählen",
                          line: "Sprache wählen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Keine weitere Sprache",
                          line: "Keine weitere Sprache",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms3",
                          on_which_to_show: "Sprache wählen",
                          line: "Sprache auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement: "Erfolgt eine Speicherung des Vertragstextes?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          statement:
                            "Wie lange wird der Vertragstext gespeichert?",
                          eid: "s3-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          line: "Dauer auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Wie wird dem Kunden der Vertragstext zugänglich gemacht?",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s4-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s5",
                      statement:
                        "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies?",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s5-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s6",
                      statement:
                        "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s6-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s6-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  name_edit:false,
                  total_fields: 4,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Enthalten die Preise jeweils die gültige gesetzliche Umsatzsteuer?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Fallen Liefer- oder Versandkosten an? Wenn ja, wie hoch sind diese?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          line: "Höhe auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Hat der Kunde im Falle eines Widerrufs die Kosten für eine Rücksendung zu tragen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Wollen Sie die versandten Produkte bis zur vollständigen Zahlung in Ihrem Eigentum behalten?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: true,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "<h2>Europäische Streitschlichtungsplattform</h2>",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "<h2>Schlussbestimmungen<h2>",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Unterliegen Sie speziellen Verhaltenskodizies?",
                      type: "radio",
                      length: 2,
                      value: "",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          statement: "",
                          line: "Verhaltenskodizies",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Signature",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                  type :"signature_card",
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "Allgemeine Geschäftsbedingungen",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Vertragspartner",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1",
                        "s2-ms1",
                        "s2-ms2",
                        "s2-ms3",
                        "s2-ms4",
                        "s2-ms5",
                        "s2-ms6",
                        "s2-ms7",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "​Vertragspartner des Kunden für die über shopify abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            { s1: ["Frau", "Herr"] },
                            "s2-ms1",
                            "s2-ms2",
                          ],
                          display: " [[0]]  [[1]] [[2]]",
                        },
                      ],
                      values_on_which_depend: ["s1", "s2-ms1", "s2-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms3", "s2-ms4"],
                          display: " [[0]]  [[1]] ",
                        },
                      ],
                      values_on_which_depend: ["s2-ms3", "s2-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms5", "s2-ms6","s2-ms7"],
                          display: " [[0]]  [[1]]  [[2]] ",
                        },
                      ],
                      values_on_which_depend: ["s2-ms5", "s2-ms6","s2-ms7"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Vertragsschluss",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1",
                        "s2",
                        "s3",
                        "s4-ms1",
                        "s5-ms1",
                        "s6",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die im Rahmen von Amazon vorgebrachten Angebote des Anbieters stellen verbindliche Angebote zum Abschluss eines Kaufverträges dar.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde kann die einzelnen Artikel über den Button „In den Einkaufswagen“ auswählen. Betätigt der Kunde nun den Button „zur Kasse gehen“, kann der Kunde seine Versandadresse, sowie seine gewünschte Zahlungsart auswählen. Anschließend gibt der Kunde über den Button „Jetzt kaufen“ ein verbindliches Angebot zum Abschluss eines Kaufverträges an den Anbieter ab.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms3"],
                          display: "Als Vertragssprache stehen deutsch sowie, [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Sprache wählen" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Die Vertragssprache ist Deutsch.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Keine weitere Sprache" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertragstext wird im Anschluss an den Vertragsschluss vom Anbieter gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3"],
                          display:
                            "Dieser Vertrag wird vom Anbieter [[0]] gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertragsschluss wird vom Anbieter nicht gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s4-ms1"],
                          display:
                            "Der Kunde erhält den Vertragstext über [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s4-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s5-ms1"],
                          display:
                            "Der Vertragstext ist dem Kunden auch im Anschluss an den Vertragsschluss noch über [[0]] zugänglich.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s5-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde kann seine Daten, nachdem er diese in das Formular im Rahmen des Bestellvorgangs eingegeben hat jederzeit löschen oder die Löschung der eingegebenen Daten durch das Schließen des Browsers erreichen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s6: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Bezahlung</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s2", "s3", "s4"],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            " Als Zahlungsart steht/stehen dem Kunden [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die für die Waren angegebenen Preise enthalten die jeweils gültige gesetzliche Umsatzsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3"],
                          display:
                            "Die Versandkosten betragen [[0]] je Bestellung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Wir liefern versandkostenfrei.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde hat im Falle eines Widerrufs die unmittelbaren Kosten der Rücksendung zu tragen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Eigentumsvorbehalt",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Bis zur vollständigen Bezahlung verbleiben die gelieferten Waren im Eigentum des Anbieters.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Gewährleistung",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "<h2>Europäische Streitschlichtungsplattform</h2>",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2>Europäische Streitschlichtungsplattform</h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_value_display: "",
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      displayed: false,
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "<h2>Schlussbestimmungen<h2>",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2>Schlussbestimmungen<h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1"],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbes. des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms3"],
                          display:
                            "Der Anbieter unterliegt dem speziellen Verhaltenskodex: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Speziellen Verhaltenskodizies unterliegen wir nicht",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Signature",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "AGB Ebay",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Unter welchem Namen betreiben Sie Ihren ebay-Shop?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },

                    {
                      textfieldapproval: false,
                      fields_display: false,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Handelt es sich bei dem Vertragspartner des Kunden um eine natürliche oder juristische Person?",
                      type: "dropselect",
                      length: 2,
                      value: "",
                      choices: ["Natürliche Person", "Juristische Person"],
                      dropselect_display: true,
                      dropselect: [
                        {
                          on_which_to_show: "Natürliche Person",
                          eid: "s2-ms1",
                          statement:
                            "Wer soll Vertragspartner des Kunden werden?",
                          type: "dropselect",
                          length: 2,
                          value: "",
                          choices: ["keine Angabe", "Frau", "Herr"],
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement: "Wer soll Vertragspartner des Kunden werden?",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s3-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s3-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s3-ms3",
                          line: "Strasse",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s3-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s3-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-2",
                        },
                        {
                          eid: "s3-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s3-ms7",
                          line: "Email",
                          value: "",
                          size: "col-5",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  name_edit:false,
                  total_fields: 11,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      dropselect_display: false,
                      fields_display: true,

                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Sind die von Ihnen im Rahmen des Shops veröffentlichten Angebote bindend? (insb. hins. des Preises)",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Vertragsschluss zustande kommt. Sind Ihre Angebote bereits bindend, kommt der Vertragsschluss mit der Bestellung durch den Kunden zustande. Wir empfehlen grundsätzlich die Angebote als nicht bindend einzuordnen, da Sie sich hiermit die Möglichkeit offenhalten, Bestellungen aus verschiedensten Gründen (z.B. Lieferengpass etc.) nicht zu bestätigen, sodass es nicht zu einem Vertragsschluss mit gegenseitigen Verpflichtungen hieraus kommt",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,
                      textfieldapprovalfields: [],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Kann der Vertragsschluss über eine „Sofort-Kaufen“-Option zu zustande kommen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Kann der Vertrag über ein Warenkorb-System zustande kommen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                          tiptapedit: false,
                        },
                        {
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                          tiptapedit: false,
                        },
                      ],
                    },
                    //Stellen Sie dem Kunden den Button „sofort bezahlen“ zur Verfügung?
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Stellen Sie dem Kunden den Button „sofort bezahlen“ zur Verfügung?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s5",
                      statement:
                        "Stellen Sie dem Kunden den Button „sofort bezahlen“ zur Verfügung?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s5-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s5-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s6",
                      statement:
                        "Wie erfolgt die Annahme des Vertragsangebots?",
                      type: "textfield",
                      length: 1,
                      ishelp: true,
                      ishelpstatement:
                        "Sie sind nicht verpflichtet den Vertragstext zu speichern. Sofern Sie dies jedoch tun, muss der Kunde in den AGB hierüber informiert werden",
                      fields: [
                        {
                          eid: "s6-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s7",
                      statement:
                        "In welchen Sprachen (außer deutsch) kann der Vertragsschluss erfolgen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s7-ms1",
                          value: "Sprache wählen",
                          line: "Sprache wählen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s7-ms2",
                          value: "Keine weitere Sprache",
                          line: "Keine weitere Sprache",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s7-ms3",
                          on_which_to_show: "Sprache wählen", // will have to look on which to show
                          line: "Sprache auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      fields_display: true,

                      tiptapedit: false,
                      eid: "s8",
                      statement: "Erfolgt eine Speicherung des Vertragstextes?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sie sind nicht verpflichtet den Vertragstext zu speichern. Sofern Sie dies jedoch tun, muss der Kunde in den AGB hierüber informiert werden",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s8-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s8-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: false,

                      dropselect_display: true,
                      dropselect: [
                        {
                          tiptapedit: false,
                          on_which_to_show: "Ja",
                          eid: "s8-ms3",
                          statement:
                            "Wie lange wird der Vertragstext gespeichert?",
                          type: "dropselect",
                          length: 2,
                          value: "",
                          choices: [
                            ". 2 Jahre",
                            ". 5 Jahre ",
                            ". 10 Jahre ",
                            ". Abweichende Speicherdauer ",
                          ],
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s9",
                      statement:
                        "Wie wird dem Kunden der Vertragstext zugänglich gemacht?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s9-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s10",
                      statement:
                        "Wenn der Vertragstext dem Kunden auch später noch zugänglich ist – auf welchem Wege geschieht dies?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s10-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s11",
                      statement:
                        "Kann der Kunde im Rahmen des Vertragsschlusses etwaige Eingabefehler vor Abgabe seiner Vertragserklärung erkennen und berichtigen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Dies ist eine Information, die Sie dem Kunden laut Gesetz erteilen müssen. Sofern der Vertragsschluss über den normalen ebay-Ablauf zustande kommt, empfehlen wir die folgende Auswahl",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s11-ms1",
                          value:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                          line:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                        {
                          tiptapedit: false,
                          eid: "s11-ms2",
                          value: "Sonstiges",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s11-ms3",
                          on_which_to_show: "Sonstiges", // will have to look on which to show
                          line: "",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  name_edit:false,
                  total_fields: 4,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Welche Zahlungsarten stellen Sie Ihrem Kunden zur Verfügung?",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,

                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Enthalten die Preise jeweils die gültige gesetzliche Umsatzsteuer?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile. Hierzu sind Sie nur dann nicht verpflichtet, wenn Sie Kleinunternehmer iSd §19 UstG sind.",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                          line:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Kleinunternehmer iSd § 19 UstG",
                          line: "Kleinunternehmer iSd § 19 UstG",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,

                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Fallen Liefer- oder Versandkosten an? Wenn ja, wie hoch sind diese?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Sofern Sie Ihre Angebote gegenüber Verbrauchern und nicht ausschließlich gegenüber Unternehmern anbieten, sind Sie verpflichtet sog. Gesamtpreise anzugeben, d.h. Preise inklusive aller Steuern und sonstiger Preisbestandteile",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          line: "Höhe auswählen",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,

                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Hat der Kunde im Falle eines Widerrufs die Kosten für eine Rücksendung zu tragen?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Laut Gesetz trägt grundsätzlich der Verbraucher die Kosten der Rücksendung, sofern der Unternehmer diesen über diese Kostentragungspflicht unterrichtet hat. Dies gilt dann nicht, wenn der Unternehmer sich ausdrücklich dazu bereit erklärt hat die Kosten zu tragen.",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Wollen Sie die versandten Produkte bis zur vollständigen Zahlung in Ihrem Eigentum behalten?",
                      type: "radio",
                      length: 2,
                      value: null,
                      ishelp: true,
                      ishelpstatement:
                        "Dies ist gängige Praxis, da hierdurch die Rückabwicklung im Falle einer unterbleibenden Zahlung erleichtert wird.",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: true,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "<h2>Europäische Streitschlichtungsplattform</h2>",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "<h2>Schlussbestimmungen<h2>",
                  name_edit:false,
                  total_fields: 2,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement: "",
                      type: "radio",
                      length: 2,
                      value: "Ja",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Unterliegen Sie speziellen Verhaltenskodizies?",
                      type: "radio",
                      length: 2,
                      value: "",
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms3",
                          on_which_to_show: "Ja", // will have to look on which to show
                          statement:
                            "Unternehmenseigene oder sonstige Verhaltenskodizies (Name, Zweck, ggf. Domain zum Text des Verhaltenskodexes)",
                          line: "Verhaltenskodizies",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Signature",
                  
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                  type :"signature_card",
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "Allgemeine Geschäftsbedingungen",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Vertragspartner",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display: "[[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: center; font-weight: 700; font-size: 18.72px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Vertragspartner",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s2-ms1",
                        "s3-ms1",
                        "s3-ms2",
                        "s3-ms3",
                        "s3-ms4",
                        "s3-ms5",
                        "s3-ms6",
                        "s3-ms7",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            "Vertragspartner des Kunden für die über den Amazon Shop [[0]] abgeschlossenen Verträge ist im Rahmen des vorliegenden Angebots:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            { "s2-ms1": ["Frau", "Herr"] },
                            "s3-ms1",
                            "s3-ms2",
                          ],
                          display: " [[0]]  [[1]] [[2]]",
                        },
                      ],
                      values_on_which_depend: ["s3-ms1", "s3-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3", "s3-ms4"],
                          display: " [[0]]  [[1]] ",
                        },
                      ],
                      values_on_which_depend: ["s3-ms3", "s3-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms5", "s3-ms6","s3-ms7"],
                          display: " [[0]]  [[1]]  [[2]]",
                        },
                      ],
                      values_on_which_depend: ["s3-ms5", "s3-ms6","s3-ms7"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center; margin-top: 0.5%; word-break: break-word; ",
                      heading_property_number: false,
                      heading_value: 0,
                      isStrong: true,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Vertragsschluss",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Vertragsschluss",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1",
                        "s2",
                        "s3",
                        "s4",
                        "s5",
                        "s6-ms1",
                        "s7",
                        "s8",
                        "s9-ms1",
                        "s10-ms1",
                        "s11",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die im Rahmen von ebay vorgebrachten Angebote des Anbieters stellen verbindliche Angebote für den Abschluss eines Kaufverträges dar.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die im Rahmen von ebay vorgebrachten Angebote des Anbieters stellen unverbindliche Einladungen zur Abgabe eines Angebotes durch den Kunden dar.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Für den Abschluss des Verträges stehen dem Kunden folgende Möglichkeiten offen:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "a) Der Kunde kann durch die Betätigung des Buttons „Sofort-Kaufen“ das Angebot des Anbieters direkt annehmen. Ein Kaufvertrag kommt in diesem Fall durch das Anklicken des „Sofort-Kaufen“-Buttons, sowie die anschließende Bestätigung zustande.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "b) Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der ebay GmbH: <a href= https://www.ebay.de/help/policies/member-behavior-policies/allgemeine-geschftsbedingungen-fr-die-nutzung-der-deutschen-ebaydienste?id=4259",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "a) Der Kunde kann die Artikel in den Warenkorb legen. Die Annahme erfolgt in diesem Fall durch den Abschluss des anschließenden Zahlungsvorgangs.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "b) Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der ebay GmbH: https://www.ebay.de/help/policies/member-behavior-policies/allgemeine-geschftsbedingungen-fr-die-nutzung-der-deutschen-ebaydienste?id=4259",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "c) Sofern der Anbieter die Option „Sofortige Bezahlung“ eröffnet, nimmt der Kunde das Angebot durch die Betätigung des Buttons, sowie den Abschluss des nachfolgenden Zahlungsvorgangs an.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: false,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde nimmt das Angebot des Anbieters durch die Abgabe eines Gebots an. Die Annahme ist dahingehend aufschiebend bedingt, dass der Kunde nach Ablauf der Angebotsdauer Höchstbietender ist. Ein Gebot erlischt, wenn ein anderer Kunde während der Angebotsdauer Höchstbietender ist.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Hinblick auf die Vertragsabwicklung gelten im Übrigen die Allgemeinen Geschäftsbedingungen der ebay GmbH: https://www.ebay.de/help/policies/member-behavior-policies/allgemeine-geschftsbedingungen-fr-die-nutzung-der-deutschen-ebaydienste?id=4259",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Anschluss an die Abgabe des Angebots erhält der Kunde per E-Mail eine automatische Bestätigung, dass der Anbieter das Angebot erhalten hat. Die Bestellbestätigung führt noch nicht zum Vertragsschluss.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s6-ms1"],
                          display:
                            "Die Annahme des Vertragsangebots erfolgt über [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s6-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s7-ms3"],
                          display:
                            "Als Vertragssprache stehen deutsch ,[[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s7: "Sprache wählen" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Die Vertragssprache ist Deutsch.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s7: "Keine weitere Sprache" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            {
                              "s8-ms3": [
                                ". 2 Jahre",
                                ". 5 Jahre ",
                                ". 10 Jahre ",
                              ],
                            },
                          ],
                          display:
                            "Der Vertragstext wird im Anschluss an den Vertragsschluss vom Anbieter gespeichert. Die Speicherung erfolgt für [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s8: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertragsschluss wird vom Anbieter nicht gespeichert.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s8: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s9-ms1"],
                          display:
                            "Der Kunde erhält den Vertragstext über [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s9-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s10-ms1"],
                          display:
                            "Der Vertragstext ist dem Kunden auch im Anschluss an den Vertragsschluss noch über [[0]] zugänglich.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s10-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Im Rahmen des Vertragsschlusses über den amazon-Warenkorb kann der Kunde seine Daten, nachdem er diese in das amazon-Formular eingegeben hat jederzeit löschen oder die Löschung der eingegebenen Daten durch das Schließen des Browsers erreichen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s11:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " Im Rahmen der „1-Click“-Bestelloption kann der Bestellvorgang über die Zurück-Funktion oder das Schließen des Browsers abgebrochen werden.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s11:
                            "Berichtigung im Formular möglich, Abbruch der Bestellung durch Schließen des Browsers",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s11-ms3"],
                          display: "[[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s11: "Sonstiges" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Bezahlung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2><strong>Bezahlung</strong></h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s2", "s3", "s4"],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1"],
                          display:
                            " Als Zahlungsart steht/stehen dem Kunden [[0]] zur Verfügung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die für die Waren angegebenen Preise enthalten die jeweils gültige gesetzliche Mehrwertsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        {
                          s2:
                            "Keine Besonderheiten [Angebote gegenüber Verbrauchern]",
                        },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Aufgrund der Kleinunternehmereigenschaft des Anbieters iSd § 19 UstG enthalten die angegebenen Preise keine Mehrwertsteuer.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        { s2: "Kleinunternehmer iSd § 19 UstG" },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3-ms3"],
                          display:
                            "Die Versandkosten betragen [[0]] je Bestellung.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Wir liefern versandkostenfrei.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s3: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Kunde hat im Falle eines Widerrufs die unmittelbaren Kosten der Rücksendung zu tragen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s4: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 4,
                  eye: false,
                  name: "Eigentumsvorbehalt",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Eigentumsvorbehalt",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Bis zur vollständigen Bezahlung verbleiben die gelieferten Waren im Eigentum des Anbieters.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 5,
                  eye: false,
                  name: "Gewährleistung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Gewährleistung",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die Gewährleistung bestimmt sich nach den gesetzlichen Vorschriften.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 6,
                  eye: false,
                  name: "<h2>Europäische Streitschlichtungsplattform</h2>",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2>Europäische Streitschlichtungsplattform</h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Die EU-Kommission stellt eine Online-Streitbeilegungsplattform (OS) bereit. Diese findet sich unter https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 7,
                  eye: false,
                  name: "<h2>Schlussbestimmungen<h2>",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "<h2>Schlussbestimmungen<h2>",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700;font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: true,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Auf Verträge zwischen dem Anbieter und den Kunden findet das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts Anwendung. Die gesetzlichen Vorschriften zur Beschränkung der Rechtswahl und zur Anwendbarkeit zwingender Vorschriften insbesondere des Staates, in dem der Kunde als Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      inner_heading_value_display: "",
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Der Vertrag bleibt auch bei rechtlicher Unwirksamkeit einzelner Punkte in seinen übrigen Teilen verbindlich. Anstelle der unwirksamen Punkte treten, soweit vorhanden, die gesetzlichen Vorschriften. Soweit dies für eine Vertragspartei eine unzumutbare Härte darstellen würde, wird der Vertrag jedoch im Ganzen unwirksam.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s1: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_value_display: "",
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Speziellen Verhaltenskodizies unterliegen wir nicht.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_value_display: "",
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2-ms3"],
                          display:
                            "Wir unterliegen den folgenden Verhaltenskodizies: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [{ s2: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%; display:inline;",
                      isStrong: false,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      inner_heading_value_display: "",
                      inner_heading_property_number: true,
                      inner_heading_value: 0,
                      displayed: false,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 8,
                  eye: false,
                  name: "Signature",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "Einwilligung Mitarbeiter_Fotos_Videos",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  name_edit:false,
                  total_fields: 6,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie bitte den vollständigen Namen Ihres Unternehmens an",
                      type: "textfield",
                      length: 2,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "Firmenname",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s1-ms2",
                          line: "Rechtsform",
                          value: "",
                          size: "col-4",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Sollen von den Personen Fotos oder Videos erstellt werden?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Fotos",
                          line: "Fotos",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Videos",
                          line: "Videos",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Geben Sie eine Addresse, eine Telefonnummer und eine E-Mail Addresse Ihres Unternehmens an",
                      type: "checkbox",
                      value: [],
                      length: 4,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          line: "Internetseite des Unternehmens",
                          value: "auf unserer Internetseite",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          line: "Social-Media-Kanäle",
                          value: "auf unseren Social-Media-Kanälen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          line: "Gedruckte Werbematerialien",
                          value: "auf gedruckten Werbematerialien",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms4",
                          line: "Pressemitteilungen",
                          value: "in Pressemitteilungen",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement: "",
                      type: "radio",
                      length: 1,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          on_which_to_show: 0,
                          line: "Sonstiges",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s5",
                      statement:
                        "Sollen die Namen der auf den Bildern abgebildeten Mitarbeiter unter dem Bild genannt werden?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Ja",
                          line: "Ja",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Nein",
                          line: "Nein",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Datenschutzhinweise",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie die Informationen des Verantwortlichen für die Datenverarbeitung an",
                      ishelp: true,
                      ishelpstatement:
                        'Bei dem "Verantwortlichen für Datenschutz" handelt es sich meist um ihr Unternehmen selbst.',
                      type: "textfield",
                      length: 8,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s1-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s1-ms3",
                          line: "Straße",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s1-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s1-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-3",
                        },
                        {
                          eid: "s1-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-9",
                        },
                        {
                          eid: "s1-ms7",
                          line: "Telefonnummer",
                          value: "",
                          size: "col-6",
                        },
                        {
                          eid: "s1-ms8",
                          line: "Email",
                          value: "",
                          size: "col-6",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Signature",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                  type :"signature_card",
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "Einwilligung in die Verwendung von Mitarbeiter [[0]] ",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s1-ms2",
                        { s5: "Ja" },
                      ],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700 ; font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s1-ms1",
                            "s1-ms2",
                            "s3",
                            "s4-ms2",
                            "s2",
                          ],
                          display:
                            "  Die [[0]] [[1]] beabsichtigt, zur Darstellung des Unternehmens [[2]] [[3]] [[4]] zu erstellen und zu veröffentlichen, auf denen Mitarbeiter zu sehen sind.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [], // if value is two times in string it should come two times in that array
                          display:
                            "Im Rahmen dieser Veröffentlichung sollen die abgebildeten Mitarbeiter auch vorgestellt werden. Hierdurch soll eine bessere Kundenbindung erreicht werden, indem die Kunden sich ein besseres Bild von ihrem Ansprechpartner machen können.",
                        },
                      ],
                      values_on_which_depend: [{ s5: "Ja" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [], // if value is two times in string it should come two times in that array
                          display:
                            "Dabei erfolgt keine Nennung der Namen der abgebildeten Mitarbeiter und es werden nicht gezielt einzelne Mitarbeiter vorgestellt.",
                        },
                      ],
                      values_on_which_depend: [{ s5: "Nein" }],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 5,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3", "s4-ms2", "s2"],
                          display:
                            "1. Ich willige ein, dass zu diesem Zweck die Videos, in denen ich zu sehen bin, [[0]] [[1]] auf unserer Internetseite abgebildet werden. Soweit sich aus den [[2]] Videos Hinweise auf meine ethnische Herkunft, Religion oder Gesundheit ergeben (z. B. Hautfarbe, Kopfbedeckung, Brille), bezieht sich meine Einwilligung auch auf diese Angaben.",
                        },
                      ],
                      values_on_which_depend: ["s5"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "2. Mir ist bekannt, dass Informationen im Internet weltweit zugänglich sind, mit Suchmaschinen gefunden und mit anderen Informationen verknüpft werden können, woraus sich unter Umständen Persönlichkeitsprofile über mich erstellen lassen. Ins Internet gestellte Informationen, einschließlich Fotos, können problemlos kopiert und weiterverbreitet werden. Es gibt spezialisierte Archivierungsdienste, deren Ziel es ist, den Zustand bestimmter Websites zu bestimmten Terminen dauerhaft zu dokumentieren. Dies kann dazu führen, dass im Internet veröffentlichte Informationen auch nach ihrer Löschung auf der Ursprungs-Seite weiterhin aufzufinden sind.",
                        },
                      ],
                      values_on_which_depend: ["s5"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "3. Die Einwilligung in die Nutzung zum oben genannten Zweck ist freiwillig. Wenn der Mitarbeiter in die Verwendung des [[0]] nicht einwilligt, so wirkt sich dies nicht negativ auf das Arbeitsverhältnis zwischen den Parteien aus",
                        },
                      ],
                      values_on_which_depend: ["s5"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                            "s2",
                            "s2",
                            "s2",
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                          ],
                          display:
                            "4. Ich kann meine Einwilligung jederzeit in Textform (z. B. Brief, E-Mail) widerrufen. [[0]], in denen ich erkennbar bin und die im Wesentlichen nur mich zeigen (z. B. beim Telefonieren oder bei einer typischen Tätigkeit), werden dann unverzüglich aus dem Internetangebot [[1]] [[2]] entfernt und nicht mehr für neue Drucksachen verwendet. Sofern ich auf einem der [[3]], zusammen mit anderen Personen abgebildet bin, müssen diese [[4]] nicht entfernt werden, sondern es genügt, wenn ich unverzüglich auf den [[5]] unkenntlich gemacht werde (z. B. durch Verpixelung). Bin ich auf einem der [[6]] zusammen mit anderen Personen abgebildet und möchte die [[7]] [[8]] die Möglichkeit zur Verpixelung nicht nutzen, beträgt die Frist für den Austausch des Fotos sechs Monate, bei einem Video 1 Jahr.",
                        },
                      ],
                      values_on_which_depend: ["s5"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 5,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "____________________________" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "____________________________ ",
                        },
                      ],
                      values_on_which_depend: ["s5"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Ort, Datum" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "Unterschrift",
                        },
                      ],
                      values_on_which_depend: ["s5"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " __________________________________________________________________",
                        },
                      ],
                      values_on_which_depend: ["s5"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Name in Druckbuchstaben",
                        },
                      ],
                      values_on_which_depend: ["s5"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Datenschutzhinweise",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Hinweise zum Datenschutz",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s1-ms2",
                        "s1-ms3",
                        "s1-ms4",
                        "s1-ms5",
                        "s1-ms6",
                        "s1-ms7",
                        "s1-ms8",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: center; font-weight: 700",
                      isStrong: true,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "1. Rechtsgrundlage für die Speicherung, sowie die Verarbeitung der vertragsgegenständlichen ist Ihre Einwilligung in Verbindung mit Art. 6 Abs. 1 S. 1 lit. a DSGVO.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "2. Verantwortlicher für die Speicherung und die Verarbeitung der vertragsgegenständlichen iSd DSGVO ist:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1", "s1-ms2"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms3", "s1-ms4"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms3", "s1-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms5", "s1-ms6"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms5", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms7", "s1-ms8"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms7", "s1-ms8"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "3. Die Speicherung und Verarbeitung der Videoserfolgt für die Dauer, die für Erreichung des oben dargestellten Nutzungszwecks erforderlich sind oder bis sie Ihre Einwilligung gemäß dieses Verträges widerrufen haben.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "4. Nach den Regelungen des Bundesdatenschutzgesetzes und der Datenschutzgrundverordnung stehen Ihnen verschiedene Rechte in Bezug auf die vertragsgegenständlichen Videos zu:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(1) Aus Art. 15 Abs. 1 DSGVO haben Sie einen Anspruch auf konstenlose Auskunfserteilung über Ihre gespeicherten Daten, sowie gemäß Art. 15 Abs. 3 DSGVO das Recht auf eine Kopie dieser Datenaufstellung zu erhalten.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(2) Gemäß Art. 16 DSGVO stehen Ihnen auch ein Anspruch auf Berichtigung der von uns verarbeiteten Daten zu. Demnach sind Sie dazu berechtigt, Ihre Daten zu berichtigen oder vervollständigen, wenn sie falsch oder unvollständig sind.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(3) Gemäß Art. 17 DSGVO haben Sie das Recht, von uns die Löschung Ihrer von uns verarbeiteten personenbezogenen Daten zu verlangen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(4) Nach Art. 18 DSGVO können Sie von uns unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(5) Nach Art. 21 DSGVO haben Sie unter bestimmten Umständen ein Widerspruchsrecht gegen die Verarbeitung Sie betreffender personenbezogener Daten.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms8"],
                          display:
                            "(6) Möchten Sie ihre Rechte geltend machen, wenden Sie sich bitte per E-Mail an: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Signature",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "Einwilligung Fotos_Videos",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  name_edit:false,
                  total_fields: 5,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie bitte den vollständigen Namen Ihres Unternehmens an",
                      type: "textfield",
                      length: 2,
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "Firmenname",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s1-ms2",
                          line: "Rechtsform",
                          value: "",
                          size: "col-4",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Sollen von den Personen Fotos oder Videos erstellt werden?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Fotos",
                          line: "Fotos",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Videos",
                          line: "Videos",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Geben Sie eine Addresse, eine Telefonnummer und eine E-Mail Addresse Ihres Unternehmens an",
                      type: "checkbox",
                      value: [],
                      length: 4,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s3-ms1",
                          line: "Internetseite des Unternehmens",
                          value: "auf unserer Internetseite",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms2",
                          line: "Social-Media-Kanäle",
                          value: "auf unseren Social-Media-Kanälen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms3",
                          line: "Gedruckte Werbematerialien",
                          value: "auf gedruckten Werbematerialien",
                        },
                        {
                          tiptapedit: false,
                          eid: "s3-ms4",
                          line: "Pressemitteilungen",
                          value: "in Pressemitteilungen",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement: "",
                      type: "radio",
                      length: 1,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          on_which_to_show: 0,
                          line: "Sonstiges",
                          value: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Datenschutzhinweise",
                  name_edit:false,
                  total_fields: 8,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie die Informationen des Verantwortlichen für die Datenverarbeitung an",
                      type: "textfield",
                      length: 8,
                      ishelp: true,
                      ishelpstatement:
                        'Bei dem "Verantwortlichen für Datenschutz" handelt es sich meist um ihr Unternehmen selbst.',
                      fields: [
                        {
                          eid: "s1-ms1",
                          line: "Vorname",
                          value: "",
                          size: "col-5",
                        },
                        {
                          eid: "s1-ms2",
                          line: "Nachname",
                          value: "",
                          size: "col-7",
                        },
                        {
                          eid: "s1-ms3",
                          line: "Straße",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s1-ms4",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s1-ms5",
                          line: "PLZ",
                          value: "",
                          size: "col-3",
                        },
                        {
                          eid: "s1-ms6",
                          line: "Ort",
                          value: "",
                          size: "col-9",
                        },
                        {
                          eid: "s1-ms7",
                          line: "Telefonnummer",
                          value: "",
                          size: "col-6",
                        },
                        {
                          eid: "s1-ms8",
                          line: "Email",
                          value: "",
                          size: "col-6",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Signature",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                  type :"signature_card",
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "Einwilligung in die Verwendung von Mitarbeiter [[0]] ",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700 ; font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s1-ms1",
                            "s1-ms2",
                            "s3",
                            "s4-ms2",
                            "s2",
                          ],
                          display:
                            "  Die [[0]] [[1]] beabsichtigt, zur Darstellung des Unternehmens [[2]] [[3]] [[4]] zu erstellen und zu veröffentlichen, auf denen Mitarbeiter zu sehen sind.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s3", "s4-ms2", "s2"],
                          display:
                            "1. Ich willige ein, dass zu diesem Zweck die Videos, in denen ich zu sehen bin, [[0]] [[1]] auf unserer Internetseite abgebildet werden. Soweit sich aus den [[2]] Videos Hinweise auf meine ethnische Herkunft, Religion oder Gesundheit ergeben (z. B. Hautfarbe, Kopfbedeckung, Brille), bezieht sich meine Einwilligung auch auf diese Angaben.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "2. Mir ist bekannt, dass Informationen im Internet weltweit zugänglich sind, mit Suchmaschinen gefunden und mit anderen Informationen verknüpft werden können, woraus sich unter Umständen Persönlichkeitsprofile über mich erstellen lassen. Ins Internet gestellte Informationen, einschließlich Fotos, können problemlos kopiert und weiterverbreitet werden. Es gibt spezialisierte Archivierungsdienste, deren Ziel es ist, den Zustand bestimmter Websites zu bestimmten Terminen dauerhaft zu dokumentieren. Dies kann dazu führen, dass im Internet veröffentlichte Informationen auch nach ihrer Löschung auf der Ursprungs-Seite weiterhin aufzufinden sind.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "3. Die Einwilligung in die Nutzung zum oben genannten Zweck ist freiwillig. Wenn der Mitarbeiter in die Verwendung des [[0]] nicht einwilligt, so wirkt sich dies nicht negativ auf das Arbeitsverhältnis zwischen den Parteien aus",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                            "s2",
                            "s2",
                            "s2",
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                          ],
                          display:
                            "4. Ich kann meine Einwilligung jederzeit in Textform (z. B. Brief, E-Mail) widerrufen. [[0]], in denen ich erkennbar bin und die im Wesentlichen nur mich zeigen (z. B. beim Telefonieren oder bei einer typischen Tätigkeit), werden dann unverzüglich aus dem Internetangebot [[1]] [[2]] entfernt und nicht mehr für neue Drucksachen verwendet. Sofern ich auf einem der [[3]], zusammen mit anderen Personen abgebildet bin, müssen diese [[4]] nicht entfernt werden, sondern es genügt, wenn ich unverzüglich auf den [[5]] unkenntlich gemacht werde (z. B. durch Verpixelung). Bin ich auf einem der [[6]] zusammen mit anderen Personen abgebildet und möchte die [[7]] [[8]] die Möglichkeit zur Verpixelung nicht nutzen, beträgt die Frist für den Austausch des Fotos sechs Monate, bei einem Video 1 Jahr.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 5,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "____________________________" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "____________________________ ",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Ort, Datum" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "Unterschrift",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " __________________________________________________________________",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Name in Druckbuchstaben",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Datenschutzhinweise",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Hinweise zum Datenschutz",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: [
                        "s1-ms1",
                        "s1-ms2",
                        "s1-ms3",
                        "s1-ms4",
                        "s1-ms5",
                        "s1-ms6",
                        "s1-ms7",
                        "s1-ms8",
                      ],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: center; font-weight: 700",
                      isStrong: true,
                      afterlinebreak: 1,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "1. Rechtsgrundlage für die Speicherung, sowie die Verarbeitung der vertragsgegenständlichen ist Ihre Einwilligung in Verbindung mit Art. 6 Abs. 1 S. 1 lit. a DSGVO.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "2. Verantwortlicher für die Speicherung und die Verarbeitung der vertragsgegenständlichen iSd DSGVO ist:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms1", "s1-ms2"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms3", "s1-ms4"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms3", "s1-ms4"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms5", "s1-ms6"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms5", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms7", "s1-ms8"],
                          display: "[[0]] [[1]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms7", "s1-ms8"],
                      value: "", //
                      display: "",
                      style:
                        "font-size: 15px; text-align: center;margin-top: 0.5%;word-break: break-word;",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "3. Die Speicherung und Verarbeitung der Videoserfolgt für die Dauer, die für Erreichung des oben dargestellten Nutzungszwecks erforderlich sind oder bis sie Ihre Einwilligung gemäß dieses Verträges widerrufen haben.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "4. Nach den Regelungen des Bundesdatenschutzgesetzes und der Datenschutzgrundverordnung stehen Ihnen verschiedene Rechte in Bezug auf die vertragsgegenständlichen Videos zu:",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(1) Aus Art. 15 Abs. 1 DSGVO haben Sie einen Anspruch auf konstenlose Auskunfserteilung über Ihre gespeicherten Daten, sowie gemäß Art. 15 Abs. 3 DSGVO das Recht auf eine Kopie dieser Datenaufstellung zu erhalten.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(2) Gemäß Art. 16 DSGVO stehen Ihnen auch ein Anspruch auf Berichtigung der von uns verarbeiteten Daten zu. Demnach sind Sie dazu berechtigt, Ihre Daten zu berichtigen oder vervollständigen, wenn sie falsch oder unvollständig sind.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(3) Gemäß Art. 17 DSGVO haben Sie das Recht, von uns die Löschung Ihrer von uns verarbeiteten personenbezogenen Daten zu verlangen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(4) Nach Art. 18 DSGVO können Sie von uns unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "(5) Nach Art. 21 DSGVO haben Sie unter bestimmten Umständen ein Widerspruchsrecht gegen die Verarbeitung Sie betreffender personenbezogener Daten.",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s1-ms8"],
                          display:
                            "(6) Möchten Sie ihre Rechte geltend machen, wenden Sie sich bitte per E-Mail an: [[0]]",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2", "s1-ms6"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 3,
                  eye: false,
                  name: "Signature",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
        {
          contract_title: "Einwilligung Fotos_Videos Veranstaltungen",
          document: {
            leftSide: {
              linearprogressvalue: 0,
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  name_edit:false,
                  total_fields: 12,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: false,
                  section: [
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s1",
                      statement:
                        "Geben Sie bitte den vollständigen Namen Ihres Unternehmens an",
                      type: "textfield",
                      length: 2,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s1-ms1",
                          line: "Firmenname",
                          value: "",
                          size: "col-8",
                        },
                        {
                          tiptapedit: false,
                          eid: "s1-ms2",
                          line: "Rechtsform",
                          value: "",
                          size: "col-4",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s2",
                      statement:
                        "Sollen von den Personen Fotos oder Videos erstellt werden?",
                      type: "radio",
                      length: 2,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s2-ms1",
                          value: "Fotos",
                          line: "Fotos",
                        },
                        {
                          tiptapedit: false,
                          eid: "s2-ms2",
                          value: "Videos",
                          line: "Videos",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s3",
                      statement:
                        "Geben Sie eine Addresse, eine Telefonnummer und eine E-Mail Addresse Ihres Unternehmens an",
                      type: "textfield",
                      length: 6,
                      fields: [
                        {
                          eid: "s3-ms1",
                          line: "Straße",
                          value: "",
                          size: "col-8",
                        },
                        {
                          eid: "s3-ms2",
                          line: "Hausnummer",
                          value: "",
                          size: "col-4",
                        },
                        {
                          eid: "s3-ms3",
                          line: "PLZ",
                          value: "",
                          size: "col-3",
                        },
                        {
                          eid: "s3-ms4",
                          line: "Ort",
                          value: "",
                          size: "col-9",
                        },
                        {
                          eid: "s3-ms5",
                          line: "Telefonnummer",
                          value: "",
                          size: "col-6",
                        },
                        {
                          eid: "s3-ms6",
                          line: "Email",
                          value: "",
                          size: "col-6",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s4",
                      statement:
                        "Geben Sie eine Addresse, eine Telefonnummer und eine E-Mail Addresse Ihres Unternehmens an",
                      type: "checkbox",
                      value: [],
                      length: 4,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s4-ms1",
                          line: "Internetseite des Unternehmens",
                          value: "auf unserer Internetseite",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms2",
                          line: "Social-Media-Kanäle",
                          value: "auf unseren Social-Media-Kanälen",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms3",
                          line: "Gedruckte Werbematerialien",
                          value: "auf gedruckten Werbematerialien",
                        },
                        {
                          tiptapedit: false,
                          eid: "s4-ms4",
                          line: "Pressemitteilungen",
                          value: "in Pressemitteilungen",
                        },
                      ],
                    },
                    {
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s5",
                      statement: "",
                      type: "radio",
                      length: 1,
                      value: null,
                      fields: [
                        {
                          tiptapedit: false,
                          eid: "s5-ms1",
                          line: "Sonstiges",
                        },
                      ],
                      textfieldapproval: true,
                      textfieldapprovalfields: [
                        {
                          eid: "s5-ms2",
                          on_which_to_show: 0,
                          line: "Sonstiges",
                          value: "",
                        },
                      ],
                    },
                    {
                      textfieldapproval: false,
                      dropselect_display: false,
                      fields_display: true,
                      ishelp: false,
                      tiptapedit: false,
                      eid: "s6",
                      statement:
                        "Geben Sie bitte den vollständigen Namen Ihres Unternehmens an",
                      type: "textfield",
                      length: 1,
                      fields: [
                        {
                          eid: "s6-ms1",
                          line: "",
                          value: "",
                          size: "col-12",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Signature",
                  name_edit:false,
                  total_fields: 1,
                  completed_fields: 0,
                  linearprogressvalue: 0,
                  isactive: false,
                  havesomevalue: false,
                  isedited: false,
                  import_counter: 0,
                  signaturecard: true,
                  signature: false,
                  signaturedata: "",
                  type :"signature_card",
                  section:[],
                },
              ],
            },
            rightSide: {
              title: "",
              title_access: false,
              style: "text-align:center; font-weight: 700 ; font-size: 24px",
              card: [
                {
                  id: 1,
                  eye: false,
                  name: "Einwilligungserklärung",
                  section_inner_value_counter_greater_than_one:false,
                  section: [
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s2"],
                          display:
                            "Einwilligungserklärung zur Verwendung von [[0]] von Veranstaltungen",
                        },
                      ],
                      // values_that_update_string :["Rechtsform", "Fotos"],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "text-align: center; font-weight: 700 ; font-size: 16px",
                      isStrong: true,
                      afterlinebreak: 0,
                      heading_property_number: false,
                      heading_value: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltu", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s1-ms1",
                            "s1-ms2",
                            "s3-ms1",
                            "s3-ms2",
                            "s3-ms3",
                            "s3-ms4",
                            "s3-ms5",
                            "s3-ms6",
                            "s2",
                            "s4",
                            "s5-ms2",
                          ],
                          display:
                            " Ich willige ein, dass zu Werbezwecken der [[0]] , [[1]] , [[2]] ,  [[3]] , [[4]] , [[5]] , [[6]] , [[7]] , in denen ich zu sehen bin, [[8]] [[9]] [[10]].Dabei erfolgt keine Nennung der Namen der abgebildeten Personen  Soweit sich aus den pop Hinweise auf meine ethnische Herkunft, Religion oder Gesundheit ergeben (z. B. Hautfarbe, Kopfbedeckung, Brille), bezieht sich  meine Einwilligung auch auf diese Angaben.",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                            "s2",
                            "s1-ms1",
                            "s1-ms2",
                          ], // if value is two times in string it should come two times in that array
                          display:
                            "Ich kann meine Einwilligung jederzeit in Textform (z. B. Brief, E-Mail) widerrufen.Die  [[0]], in denen ich erkennbar bin und die im Wesentlichen nur mich zeigen (z. B. beim Telefonieren oder bei einer typischen Tätigkeit), werden dann unverzüglich aus dem Internetangebot der [[1]] [[2]]  entfernt und nicht mehr für neue Drucksachen verwendet. Bin ich auf den [[3]], zusammen mit anderen Personen abgebildet und möchte die [[4]] [[5]] die Möglichkeit zur Verpixelung nicht nutzen, beträgt die Frist für den Austausch der Fotos 6 Monate, bei einem Video 1 Jahr. ",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 5,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "____________________________" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "____________________________ ",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            "Ort, Datum" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +
                            "Unterschrift",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display:
                            " __________________________________________________________________",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: [],
                          display: "Name in Druckbuchstaben",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: true,
                      afterlinebreak: 2,
                      tiptapedit: false,
                    },
                    {
                      if: true,
                      type: "or", // or ya and
                      // display_value : ["Einwilligungserklärung zur Verwendung von  von Veranstaltungen", "Einwilligungserklärung zur Verwendung von +" + 9 +"  von Veranstaltungen"],
                      dependent_values: [
                        {
                          depend_upon: ["s6-ms1"],
                          display:
                            "Zusätzliche Informationen: Bei der Verwendung von 8 auf denen Sie abgebildet sind, haben sie nach Art. 13 DSGVO verschiedene Betroffenenrechte, wie etwa einen Auskunftsanspruch oder einen Löschungsanspruch. Näheres hierzu finden Sie unter [[0]]",
                        },
                      ],
                      values_on_which_depend: ["s1-ms1", "s1-ms2"],
                      value: "", //
                      display: "",
                      style:
                        "word-break: break-word;text-align: justify; margin-top: 0.5%",
                      isStrong: false,
                      afterlinebreak: 0,
                      tiptapedit: false,
                    },
                  ],
                },
                {
                  id: 2,
                  eye: false,
                  name: "Signature",
                  type :"signature_card",
                  signature : false,
                  signaturedata : "",
                  section_inner_value_counter_greater_than_one:false,
                  section: []
                },
              ],
            },
          },
        },
      ];