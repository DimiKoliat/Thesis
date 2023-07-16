const Data = [
    {
        "id": 1,
        "name": "Population",
        "category" : ["Demographic changes","Population"],
        "description" : "Population by country, available from 1800 to 2021.",
        "type" : "number",
        "csvFile": "population-since-1800.csv",
    },
    {
        "id": 2,
        "name": "Population density",
        "category" : ["Demographic changes","Population"],
        "description" : "Population density is measured as the number of people per square kilometer (km²) of land area.",
        "type" : "number",
        "csvFile": "population-density.csv",
    },
    {
        "id": 3,
        "name": "Life expectancy at birth",
        "category" : ["Demographic changes","Population"],
        "description" : "The average number of years a newborn would live if age-specific mortality rates in the current year were to stay the same throughout its life.",
        "type" : "number",
        "csvFile": "life-expectancy-at-birth-total-years.csv",
    },
    {
        "id": 4,
        "name": "Number of deaths",
        "category" : ["Demographic changes","Population"],
        "description" : "Annual number of deaths",
        "type" : "number",
        "csvFile": "annual-number-of-deaths-by-world-region",
    },
    {
        "id": 5,
        "name": "Number of births",
        "category" : ["Demographic changes","Population"],
        "description" : "Annual number of births",
        "type" : "number",
        "csvFile": "annual-number-of-births-by-world-region",
    },
    {
        "id": 6,
        "name": "Population living in urban areas",
        "category" : ["Demographic changes","Urban vs Rural"],
        "description" : "Share of the total population living in urban areas, with UN urbanization projections to 2050.",
        "type" : "percent",
        "csvFile": "urban-population-share-2050.csv",
    },
    {
        "id": 7,
        "name": "Share of urban population",
        "category" : ["Demographic changes","Urban vs Rural"],
        "description" : "Share of the population which live in urban areas",
        "type" : ["percent","percent"],
        "csvFile": "urban-vs-rural-majority.csv",
        "toMe": "2 pragmata se 1 arxeio "
    },
    {
        "id": 8,
        "name": "Share of rural population",
        "category" : ["Demographic changes","Urban vs Rural"],
        "description" : "Share of the population which live in rural areas",
        "type" : ["percent","percent"],
        "csvFile": "urban-vs-rural-majority.csv",
        "toMe": "2 pragmata se 1 arxeio "
    },
    {
        "id": 9,
        "name": "Electricity production from renewables sources",
        "category" : ["Energy","Renewables"],
        "description" : "Renewables include electricity production from hydropower, solar, wind, biomass & waste, geothermal, wave, and tidal sources.",
        "type" : "percent",
        "csvFile": "share-electricity-renewables.csv",
    },
    {
        "id": 10,
        "name": "Electricity production from hydropower",
        "category" : ["Energy","Renewables"],
        "description" : "Share of electricity production from hydropower",
        "type" : "percent",
        "csvFile": "share-electricity-hydro.csv",
    },
    {
        "id": 11,
        "name": "Electricity production from solar",
        "category" : ["Energy","Renewables"],
        "description" : "Share of electricity production from solar",
        "type" : "percent",
        "csvFile": "share-electricity-solar.csv",
    },
    {
        "id": 12,
        "name": "Electricity production from wind",
        "category" : ["Energy","Renewables"],
        "description" : "Share of electricity production from wind",
        "type" : "percent",
        "csvFile": "share-electricity-wind.csv",
    },
    {
        "id": 13,
        "name": "Electricity production from fossil fuels",
        "category" : ["Energy","Other"],
        "description" : "Share electricity production from fossil fuels",
        "type" : "percent",
        "csvFile": "share-electricity-fossil-fuels.csv",
    },
    {
        "id": 14,
        "name": "Electricity production from coal",
        "category" : ["Energy","Other"],
        "description" : "Share electricity production from coal",
        "type" : "percent",
        "csvFile": "share-electricity-coal.csv",
    },
    {
        "id": 15,
        "name": "Electricity production from gas",
        "category" : ["Energy","Other"],
        "description" : "Share electricity production from gas",
        "type" : "percent",
        "csvFile": "share-electricity-gas.csv",
    },
    {
        "id": 16,
        "name": "Electricity production from oil",
        "category" : ["Energy","Other"],
        "description" : "Share electricity production from oil",
        "type" : "percent",
        "csvFile": "share-electricity-oil.csv",
    },
    {
        "id": 17,
        "name": "Clean fuels and technologies for cooking",
        "category" : ["Energy"],
        "description" : "Clean cooking fuels and technologies represent non-solid fuels such as natural gas, ethanol or electric technologies.",
        "type" : "percent",
        "csvFile": "access-to-clean-fuels-and-technologies-for-cooking.csv",
    },
    {
        "id": 18,
        "name": "Deaths from air pollution",
        "category" : ["Environment","Deaths from environment","Air pollution deaths"],
        "description" : "Share of deaths, from any cause, which are attributed to air pollution – from outdoor and indoor sources – as a risk\n" +
            "factor.",
        "type" : "percent",
        "csvFile": "share-deaths-air-pollution.csv",
    },
    {
        "id": 19,
        "name": "Deaths from indoor pollution",
        "category" : ["Environment","Deaths from environment","Air pollution deaths"],
        "description" : "Share of deaths, from any cause, which are attributed to indoor air pollution – from burning solid fuels – as a risk factor.\n" +
            "\n",
        "type" : "percent",
        "csvFile": "share-deaths-indoor-pollution.csv",
    },
    {
        "id": 20,
        "name": "Share deaths outdoor pollution",
        "category" : ["Environment","Deaths from environment","Air pollution deaths"],
        "description" : "Share of deaths, from any cause, which are attributed to outdoor air\n" +
            "pollution – from ambient particulate matter and ozone – as a risk factor.",
        "type" : "percent",
        "csvFile": "share-deaths-outdoor-pollution.csv",
    },
    {
        "id": 21,
        "name": "Deaths from natural disasters",
        "category" : ["Environment","Deaths from environment","Other environment deaths"],
        "description" : "Number of deaths from natural disasters",
        "type" : "9 numbers",
        "csvFile": "number-of-deaths-from-natural-disasters.csv",
    },
    {
        "id": 22,
        "name": "Deaths from unsafe sanitation",
        "category" : ["Environment","Deaths from environment","Other environment deaths"],
        "description" : "The share of total deaths, from any cause, with unsafe sanitation as an\n" +
            "attributed risk factor.",
        "type" : "percent",
        "csvFile": "share-deaths-unsafe-sanitation.csv",
    },
    {
        "id": 23,
        "name": "Deaths from unsafe water",
        "category" : ["Environment","Deaths from environment","Other environment deaths"],
        "description" : "The share of total deaths, from any cause, with unsafe water sources\n" +
            "as an attributed risk factor.",
        "type" : "percent",
        "csvFile": "share-deaths-unsafe-water.csv",
    },
    {
        "id": 24,
        "name": "Global mismanaged plastic waste",
        "category" : ["Environment","Mismanaged waste"],
        "description" : "Share of global mismanaged plastic waste",
        "type" : "percent",
        "csvFile": "share-of-global-mismanaged-plastic-waste.csv",
    },
    {
        "id": 25,
        "name": "Lead petrol ban",
        "category" : ["Environment"],
        "description" : "Global phase-out of leaded petrol in road vehicles",
        "type" : "yes/no",
        "csvFile": "lead-petrol-ban.csv",
    },
    {
        "id": 26,
        "name": "Causes of death in 5-14 year olds",
        "category" : ["Health","Causes of Death","Causes of death by age"],
        "description" : "Annual number of deaths – by cause – for children between 5 and 14\n" +
            "years old.",
        "type" : "numbers",
        "csvFile": "causes-of-death-in-5-14-year-olds.csv",
    },
    {
        "id": 27,
        "name": "Causes of death in-15-49 year olds",
        "category" : ["Health","Causes of Death","Causes of death by age"],
        "description" : "Annual number of deaths – by cause – for people aged 15 to 49 years\n" +
            "old.",
        "type" : "numbers",
        "csvFile": "causes-of-death-in-15-49-year-olds.csv",
    },
    {
        "id": 28,
        "name": "Causes of death in 50-69 year olds",
        "category" : ["Health","Causes of Death","Causes of death by age"],
        "description" : "Annual number of deaths – by cause – for people between 50 and 69\n" +
            "years.",
        "type" : "numbers",
        "csvFile": "causes-of-death-in-50-69-year-olds.csv",
    },
    {
        "id": 29,
        "name": "Causes of death in 70 year olds",
        "category" : ["Health","Causes of Death","Causes of death by age"],
        "description" : "Annual number of deaths – by cause – for people who were 70 years\n" +
            "and older.",
        "type" : "numbers",
        "csvFile": "causes-of-death-in-70-year-olds.csv",
    },
    {
        "id": 30,
        "name": "Number of deaths by cause",
        "category" : ["Health","Causes of Death"],
        "description" : "Annual number of deaths by cause.",
        "type" : "numbers",
        "csvFile": "annual-number-of-deaths-by-cause.csv",
    },
    {
        "id": 31,
        "name": "Number of deaths by risk factor",
        "category" : ["Health","Causes of Death"],
        "description" : "Total annual number of deaths by risk factor, measured across all age groups and both sexes.",
        "type" : "numbers",
        "csvFile": "number-of-deaths-by-risk-factor.csv",
    },
    {
        "id": 32,
        "name": "Population with schizophrenia",
        "category" : ["Health","Mental disorders","Shares of mental disorders"],
        "description" : "Share of the population suffering from schizophrenia.",
        "type" : "percent",
        "csvFile": "share-of-population-with-schizophrenia.csv",
    },
    {
        "id": 33,
        "name": "Population with depression",
        "category" : ["Health","Mental disorders","Shares of mental disorders"],
        "description" : "Share of the population suffering from depression.",
        "type" : "percent",
        "csvFile": "share-with-depression.csv",
    },
    {
        "id": 34,
        "name": "Population with bipolar disorder",
        "category" : ["Health","Mental disorders","Shares of mental disorders"],
        "description" : "Share of the population suffering from bipolar disorder.",
        "type" : "percent",
        "csvFile": "share-with-bipolar-disorder.csv",
    },
    {
        "id": 35,
        "name": "Population with an eating disorder",
        "category" : ["Health","Mental disorders","Shares of mental disorders"],
        "description" : "Share of the population suffering from an eating disorder.",
        "type" : "percent",
        "csvFile": "share-with-an-eating-disorder.csv",
    },
    {
        "id": 36,
        "name": "Population with anxiety disorders",
        "category" : ["Health","Mental disorders","Shares of mental disorders"],
        "description" : "Share of the population suffering from anxiety disorders.",
        "type" : "percent",
        "csvFile": "share-with-anxiety-disorders.csv",
    },
    {
        "id": 37,
        "name": "Population with mental and substance disorders",
        "category" : ["Health","Mental disorders"],
        "description" : "Share of the population suffering from mental and substance disorders.",
        "type" : "percent",
        "csvFile": "share-with-mental-and-substance-disorders.csv",
    },
    {
        "id": 38,
        "name": "Daily smoking prevalence",
        "category" : ["Health","Substance dependence"],
        "description" : "Sharer of people aged 10 years and older that smoke tobacco daily.",
        "type" : "percent",
        "csvFile": "daily-smoking-prevalence.csv",
    },
    {
        "id": 39,
        "name": "Share of population with drug use disorders",
        "category" : ["Health","Substance dependence"],
        "description" : "Drug dependence is defined by the International Classification of\n" +
            "Diseases as the presence of three or more indicators of dependence\n" +
            "for at least a month within the previous year. Drug dependency\n" +
            "includes all illicit drugs.",
        "type" : "percent",
        "csvFile": "share-of-population-with-drug-use-disorders.csv",
    },
    {
        "id": 40,
        "name": "Share with alcohol use disorders",
        "category" : ["Health","Substance dependence"],
        "description" : "Alcohol dependence is defined by the International Classification of\n" +
            "Diseases as the presence of three or more indicators of dependence\n" +
            "for at least a month within the previous year.",
        "type" : "percent",
        "csvFile": "share-with-alcohol-use-disorders.csv",
    },
    {
        "id": 41,
        "name": "Total gov expenditure gdp",
        "category" : ["Poverty and Economic Development","Government expenditure"],
        "description" : "Total central government expenditures (payments for operating activities of the government in providing goods and\n" +
            "services), as share of GDP.",
        "type" : "percent",
        "csvFile": "total-gov-expenditure-gdp-wdi.csv",
    },
    {
        "id": 42,
        "name": "Total government expenditure per-capita",
        "category" : ["Poverty and Economic Development","Government expenditure"],
        "description" : "Total government expenditures across all levels of government. Expenditures include intermediate consumption,\n" +
            "compensation of employees, subsidies, property income, and social benefits.",
        "type" : "number",
        "csvFile": "total-gov-expenditure-percapita-OECD.csv",
    },
    {
        "id": 43,
        "name": "Historical government spending gdp",
        "category" : ["Poverty and Economic Development","Government expenditure"],
        "description" : "Total government spending, including interest government\n" +
            "expenditures, as share of national GDP",
        "type" : "percent",
        "csvFile": "historical-gov-spending-gdp.csv",
    },
    {
        "id": 44,
        "name": "Government expenditure on military",
        "category" : ["Poverty and Economic Development","Government expenditure"],
        "description" : "Military expenditures include military and civil personnel, operation and\n" +
            "maintenance, procurement, military research and development, and\n" +
            "military aid.",
        "type" : "percent",
        "csvFile": "military-expenditure-as-a-share-of-gdp.csv",
    },
    {
        "id": 45,
        "name": "Government expenditure on education public health",
        "category" : ["Poverty and Economic Development","Government expenditure"],
        "description" : "Public health expenditure includes: recurrent and capital spending\n" +
            "(central and local levels), external borrowing and grants (including\n" +
            "donations from international agencies and NGOs), and social or\n" +
            "compulsory insurance funds.",
        "type" : "percent",
        "csvFile": "public-health-expenditure-share-GDP-OWID.csv",
    },
    {
        "id": 46,
        "name": "Government expenditure on education",
        "category" : ["Poverty and Economic Development","Government expenditure"],
        "description" : "Total general government expenditure on education, expressed as a\n" +
            "percentage of total general government expenditure on all sectors.",
        "type" : "percent",
        "csvFile": "share-of-education-in-government-expenditure.csv",
    },
    {
        "id": 47,
        "name": "Employee compensation in public spending",
        "category" : ["Poverty and Economic Development","Government expenditure"],
        "description" : "Central government expenditures going to the compensation of\n" +
            "government employees. Compensation of employees includes all\n" +
            "payments (both in cash and in kind), as well as government\n" +
            "contributions to social insurance schemes such as social security and\n" +
            "pensions that provide benefits to employees.",
        "type" : "percent",
        "csvFile": "share-of-employee-compensation-in-public-spending.csv",
    },
    {
        "id": 48,
        "name": "Population living with less than 1.90 int per day",
        "category" : ["Poverty and Economic Development","Extreme poverty"],
        "description" : "The share of individuals living below the International Poverty Line of\n" +
            "1.90 international-$ per day.",
        "type" : "percent",
        "csvFile": "share-of-population-in-extreme-poverty.csv",
    },
    {
        "id": 49,
        "name": "Population living with less than 3.20 int per day",
        "category" : ["Poverty and Economic Development","Extreme poverty"],
        "description" :"The share of individuals living below the International Poverty Line of\n" +
            "3.20 international-$ per day.",
        "type" : "percent",
        "csvFile": "share-living-with-less-than-320-int--per-day.csv",
    },
    {
        "id": 50,
        "name": "Working hours per worker",
        "category" : ["Poverty and Economic Development"],
        "description" : "Average working hours per worker over a full year.",
        "type" : "number",
        "csvFile": "annual-working-hours-per-worker.csv",
    },
    {
        "id": 51,
        "name": "Incidence of child labour",
        "category" : ["Poverty and Economic Development"],
        "description" : "Share of children ages 7-14 involved in economic activity for at least one\n" +
            "hour in the reference week of the corresponding survey (irrespective of\n" +
            "school attendance)",
        "type" : "percent",
        "csvFile": "incidence-of-child-labour.csv",
    },
    {
        "id": 52,
        "name": "Gdp per capital",
        "category" : ["Poverty and Economic Development"],
        "description" : "Measured in constant international-$.",
        "type" : "number",
        "csvFile": "gdp-per-capita-worldbank.csv",
    },
    {
        "id": 53,
        "name": "Tax revenue share of gdp",
        "category" : ["Poverty and Economic Development"],
        "description" : "The level of total tax revenues as a percentage of GDP. Total tax\n" +
            "include sub-national revenues, and compulsory social security\n" +
            "contributions paid to the general government.",
        "type" : "percent",
        "csvFile": "tax-revenue-share-gdp-oecd-grsd.csv",
    },
    {
        "id": 54,
        "name": "Self-reported life satisfaction",
        "category" : ["Living conditions, Community and Wellbeing","Happiness"],
        "description" : "Please imagine a ladder, with steps numbered from 0 at the bottom to 10 at the top. The top of the ladder represents\n" +
            "the best possible life for you and the bottom of the ladder represents the worst possible life for you.",
        "type" : "percent",
        "csvFile": "happiness-cantril-ladder.csv",
    },
    {
        "id": 55,
        "name": "Share of people who say they are happy",
        "category" : ["Living conditions, Community and Wellbeing","Happiness"],
        "description" : "Share of people who say they are 'very happy' or 'rather happy'.\n" +
            "Observations correspond to first and last available waves in World\n" +
            "Value Survey",
        "type" : "percent",
        "csvFile": "share-of-people-who-say-they-are-happy.csv",
    },
    {
        "id": 56,
        "name": "Households that are single-parent",
        "category" : ["Living conditions, Community and Wellbeing","Marriage"],
        "description" : "Percentage of households comprised of a single parent and their\n" +
            "dependent children (biological, step, and adopted/foster children).",
        "type" : "percent",
        "csvFile": "share-of-single-parent-families.csv",
    },
    {
        "id": 57,
        "name": "Same sex marriage recognition",
        "category" : ["Living conditions, Community and Wellbeing","Marriage"],
        "description" : "Same sex marriage recognition",
        "type" : "text",
        "csvFile": "same-sex-marriage-recognition.csv",
    },
    {
        "id": 58,
        "name": "Births outside marriage",
        "category" : ["Living conditions, Community and Wellbeing","Marriage"],
        "description" : "Share of all children born to mothers who were not married at the time\n" +
            "of birth.",
        "type" : "percent",
        "csvFile": "share-of-births-outside-marriage.csv",
    },
    {
        "id": 59,
        "name": "Age at marriage women",
        "category" : ["Living conditions, Community and Wellbeing","Marriage"],
        "description" : "Age at marriage women",
        "type" : "percent",
        "csvFile": "age-at-marriage-women.csv",
    },
    {
        "id": 60,
        "name": "Human development index",
        "category" : ["Living conditions, Community and Wellbeing","Living conditions"],
        "description" : "The Human Development Index (HDI) is a summary\n" +
            "measure of key dimensions of human development: a long\n" +
            "and healthy life, a good education, and having a decent\n" +
            "standard of living.",
        "type" : "percent",
        "csvFile": "human-development-index.csv",
    },
    {
        "id": 61,
        "name": "Deaths from unsafe sanitation",
        "category" : ["Living conditions, Community and Wellbeing","Living conditions"],
        "description" : "The share of total deaths, from any cause, with unsafe sanitation as an\n" +
            "attributed risk factor.",
        "type" : "percent",
        "csvFile": "share-deaths-unsafe-sanitation.csv",
    },
    {
        "id": 62,
        "name": "Water and sanitation",
        "category" : ["Living conditions, Community and Wellbeing","Living conditions"],
        "description" : "Water and sanitation",
        "type" : "numbers",
        "csvFile": "water-and-sanitation.csv",
    },
    {
        "id": 63,
        "name": "Self reported trust attitudes",
        "category" : ["Living conditions, Community and Wellbeing","Trust"],
        "description" : "Share of people agreeing with the\n" +
            "statement \"most people can be trusted\"",
        "type" : "percent",
        "csvFile": "self-reported-trust-attitudes.csv",
    },
    {
        "id": 64,
        "name": "Trust on doctors and nurses",
        "category" : ["Living conditions, Community and Wellbeing","Trust"],
        "description" : "Share who trust doctors and nurses",
        "type" : "percent",
        "csvFile": "share-who-trust-doctors-and-nurses.csv",
    },
    {
        "id": 65,
        "name": "Trust on government",
        "category" : ["Living conditions, Community and Wellbeing","Trust"],
        "description" : "The share of respondents who answered \"a lot\" or \"some\" to the\n" +
            "question: \"How much do you trust your national government?\"",
        "type" : "percent",
        "csvFile": "share-who-trust-government.csv",
    },
    {
        "id": 66,
        "name": "Tourist arrivals",
        "category" : ["Living conditions"],
        "description" : "Overnight visitors who travel to a country whose main purpose in visiting is not commercial.",
        "type" : "number",
        "csvFile": "international-tourism-number-of-arrivals.csv",
    },
    {
        "id": 67,
        "name": "Population with a completed post secondary education",
        "category" : ["Education and Knowledge","Completed education"],
        "description" : "The percentage of the population 25 or older with at least completed\n" +
            "post-secondary education (ISCED level 4 or higher).",
        "type" : "percent",
        "csvFile": "share-of-the-population-with-a-completed-post-secondary-education.csv",
    },
    {
        "id": 68,
        "name": "Population with at least some secondary education",
        "category" : ["Education and Knowledge","Completed education"],
        "description" : "The percentage of population (age 25 and over) with at least completed\n" +
            "lower secondary education (ISCED 2 or higher).",
        "type" : "percent",
        "csvFile": "share-of-the-population-with-at-least-some-secondary-education.csv",
    },
    {
        "id": 69,
        "name": "Population with secondary education but no tertiary education",
        "category" : ["Education and Knowledge","Completed education"],
        "description" : "Percentage of population, 25 years and older, with either incomplete or\n" +
            "completed secondary education.",
        "type" : "percent",
        "csvFile": "share-of-the-population-with-secondary-education-but-no-tertiary-education.csv",
    },
    {
        "id": 70,
        "name": "Share of the population with completed tertiary education",
        "category" : ["Education and Knowledge","Completed education"],
        "description" : "The share refers to the population 15 years and older.",
        "type" : "percent",
        "csvFile": "share-of-the-population-with-completed-tertiary-education.csv",
    },
    {
        "id": 71,
        "name": "Duration of compulsory education",
        "category" : ["Education and Knowledge","Duration of education"],
        "description" : "The number of years that children are legally obliged to attend school.",
        "type" : "number",
        "csvFile": "duration-of-compulsory-education.csv",
    },
    {
        "id": 72,
        "name": "Average years of schooling",
        "category" : ["Education and Knowledge","Duration of education"],
        "description" : "Average number of years the population older than 25\n" +
            "participated in formal education.",
        "type" : "number",
        "csvFile": "mean-years-of-schooling-long-run.csv",
    },
    {
        "id": 73,
        "name": "Average harmonized learning outcome scores",
        "category" : ["Education and Knowledge","Education scores"],
        "description" : "Average scores across standardized, psychometrically-robust\n" +
            "international and regional student achievement tests. In order to\n" +
            "maximize coverage by country, tests have been harmonized and\n" +
            "pooled across subjects (math, reading, science) and levels (primary\n" +
            "and secondary education).",
        "type" : "number",
        "csvFile": "average-harmonized-learning-outcome-scores.csv",
    },
    {
        "id": 74,
        "name": "Students achieving the intermediate threshold score",
        "category" : ["Education and Knowledge","Education scores"],
        "description" : "Proportion of students achieving an intermediate proficiency\n" +
            "benchmark. Achievement outcomes come from standardized,\n" +
            "psychometrically-robust international and regional tests. In order to\n" +
            "maximize coverage by country, tests have been harmonized and\n" +
            "pooled across subjects (math, reading, science) and levels (primary\n" +
            "and secondary education)",
        "type" : "percent",
        "csvFile": "share-of-students-achieving-the-intermediate-threshold-score.csv",
    },
    {
        "id": 75,
        "name": "Gross enrollment ratio in primary education",
        "category" : ["Education and Knowledge","Enrollment ratio in education"],
        "description" : "Total enrollment in primary education, regardless of age, expressed as\n" +
            "a percentage of the population of official primary education age. The\n" +
            "gross enrollment ratio can exceed 100% due to the inclusion of\n" +
            "over-aged and under-aged students because of early or late school\n" +
            "entrance and grade repetition.",
        "type" : "percent",
        "csvFile": "gross-enrollment-ratio-in-primary-education.csv",
    },
    {
        "id": 76,
        "name": "Gross enrollment ratio in secondary education",
        "category" : ["Education and Knowledge","Enrollment ratio in education"],
        "description" : "Enrollment of young men and women in secondary education,\n" +
            "regardless of age, expressed as a percentage of the population of\n" +
            "official secondary education age. The gross enrollment ratio can\n" +
            "exceed 100% due to the inclusion of over-aged and under-aged\n" +
            "students because of early or late school entrance and grade repetition.",
        "type" : "percent",
        "csvFile": "gross-enrollment-ratio-in-secondary-education.csv",
    },
    {
        "id": 77,
        "name": "Gross enrollment ratio in tertiary education",
        "category" : ["Education and Knowledge","Enrollment ratio in education"],
        "description" : "Total enrollment in tertiary education, regardless of age, expressed as\n" +
            "a percentage of the total population of the five-year age group following\n" +
            "on from secondary school leaving.",
        "type" : "percent",
        "csvFile": "gross-enrollment-ratio-in-tertiary-education.csv",
    },
    {
        "id": 78,
        "name": "Government expenditure on pre-primary education as share of gdp",
        "category" : ["Education and Knowledge","Government education expenditure"],
        "description" : "Total general (local, regional and central) government expenditure on\n" +
            "pre-primary education (current, capital, and transfers), expressed as a\n" +
            "percentage of GDP. It includes expenditure funded by transfers from\n" +
            "international sources to government.",
        "type" : "percent",
        "csvFile": "government-expenditure-on-pre-primary-education-as-share-of-gdp.csv",
    },
    {
        "id": 79,
        "name": "Government expenditure on primary education as share of gdp",
        "category" : ["Education and Knowledge","Government education expenditure"],
        "description" : "Total general (local, regional and central) government expenditure on\n" +
            "primary education (current, capital, and transfers), expressed as a\n" +
            "percentage of GDP. It includes expenditure funded by transfers from\n" +
            "international sources to government.",
        "type" : "percent",
        "csvFile": "government-expenditure-on-primary-education-as-share-of-gdp.csv",
    },
    {
        "id": 80,
        "name": "Government expenditure on secondary education as share of gdp",
        "category" : ["Education and Knowledge","Government education expenditure"],
        "description" : "Total general (local, regional and central) government expenditure on\n" +
            "secondary education (current, capital, and transfers), expressed as a\n" +
            "percentage of GDP. It includes expenditure funded by transfers from\n" +
            "international sources to government.",
        "type" : "percent",
        "csvFile": "government-expenditure-on-secondary-education-as-share-of-gdp.csv",
    },
    {
        "id": 81,
        "name": "Government expenditure on tertiary education as share of gdp",
        "category" : ["Education and Knowledge","Government education expenditure"],
        "description" : "Total general (local, regional and central) government expenditure on\n" +
            "tertiary education (current, capital, and transfers), expressed as a\n" +
            "percentage of GDP. It includes expenditure funded by transfers from\n" +
            "international sources to government.",
        "type" : "percent",
        "csvFile": "government-expenditure-on-tertiary-education-as-share-of-gdp.csv",
    },
    {
        "id": 82,
        "name": "Total government expenditure on education gdp",
        "category" : ["Education and Knowledge","Government education expenditure"],
        "description" : "Total general government expenditure on education (all levels of\n" +
            "government and all levels of education), given as a share of GDP.",
        "type" : "percent",
        "csvFile": "total-government-expenditure-on-education-gdp.csv",
    },
    {
        "id": 83,
        "name": "Students from abroad",
        "category" : ["Education and Knowledge","Students abroad"],
        "description" : "Share of students from abroad studying in a given country\n" +
            "out of the total tertiary enrollment in that country.",
        "type" : "percent",
        "csvFile": "share-of-students-from-abroad.csv",
    },
    {
        "id": 84,
        "name": "Students studying abroad",
        "category" : ["Education and Knowledge","Students abroad"],
        "description" : "Number of students from a given country studying abroad as a\n" +
            "percentage of the total tertiary enrollment in that country.",
        "type" : "percent",
        "csvFile": "share-of-students-studying-abroad.csv",
    },
    {
        "id": 85,
        "name": "Literacy rate",
        "category" : ["Education and Knowledge"],
        "description" : "Literacy rate for the entire population, 2011 or latest data\n" +
            "from CIA Factbook.",
        "type" : "percent",
        "csvFile": "literacy-rate-by-country.csv",
    },
    {
        "id": 86,
        "name": "New books",
        "category" : ["Education and Knowledge","Students abroad"],
        "description" : "Number of new book-titles published\n" +
            "per 1 million inhabitants",
        "type" : "number",
        "csvFile": "new-books-per-million.csv",
    },
    {
        "id": 87,
        "name": "Individuals using the internet",
        "category" : ["Education and Knowledge","Students abroad"],
        "description" : "All individuals who have used the Internet in the last 3 months are\n" +
            "counted as Internet users. The Internet can be used via a computer,\n" +
            "mobile phone, personal digital assistant, gaming device, digital TV etc",
        "type" : "percent",
        "csvFile": "share-of-individuals-using-the-internet.csv",
    },
    {
        "id": 88,
        "name": "Law prohibit or invalidate child or early-marriage",
        "category" : ["Human rights and Democracy","Children","Marriage"],
        "description" : "It shows whether there are provisions that prevent the marriage of\n" +
            "girls, boys, or both, before they reach the legal age of marriage.",
        "type" : "text",
        "csvFile": "does-law-prohibit-or-invalidate-child-or-early-marriage.csv",
    },
    {
        "id": 89,
        "name": "Women 20-24 who were married or in union before 18",
        "category" : ["Human rights and Democracy","Children","Marriage"],
        "description" : "Estimates include women who are married or in an informal union. An\n" +
            "informal union is one in which a couple live together intending to have a\n" +
            "lasting relationship, but do not have a formal civil or religious ceremony.",
        "type" : "percent",
        "csvFile": "percentage-of-women-20-24-who-were-married-or-in-union-before-18.csv",
    },
    {
        "id": 90,
        "name": "Children ages 13-15 who report being bullied",
        "category" : ["Human rights and Democracy","Children","School"],
        "description" : "Percentage of children aged 13-15 who reported being bullied at least\n" +
            "once in the past couple of months.",
        "type" : "percent",
        "csvFile": "share-of-children-ages-13-15-who-report-being-bullied.csv",
    },
    {
        "id": 91,
        "name": "Children ages 13-15 who report being in a school fight last year",
        "category" : ["Human rights and Democracy","Children","School"],
        "description" : "Percentage of children aged 13-15 who reported being in a physical\n" +
            "fight at school, one or more times during the past 12 months.",
        "type" : "percent",
        "csvFile": "share-of-children-ages-13-15-who-report-being-in-a-school-fight-last-year.csv",
    },
    {
        "id": 92,
        "name": "Children who experience violent discipline at home",
        "category" : ["Human rights and Democracy","Children"],
        "description" : "Percentage of children aged 2–14 who according to self-reports by\n" +
            "caregivers, experienced any violent discipline at home in the past\n" +
            "month.",
        "type" : "percent",
        "csvFile": "percentage-of-children-214-who-experience-violent-discipline-at-home.csv",
    },
    {
        "id": 93,
        "name": "Girls 15-19 who report having been victims of sexual abuse",
        "category" : ["Human rights and Democracy","Children"],
        "description" : "Percentage of girls aged 15 to 19 years who report having experienced\n" +
            "forced sexual intercourse or any other forced sexual acts (including in\n" +
            "childhood). In some instances observations refer to only part of a\n" +
            "country. See sources for more details.",
        "type" : "percent",
        "csvFile": "percentage-of-girls-15-to-19-who-report-having-been-victims-of-sexual-abuse.csv",
    },
    {
        "id": 94,
        "name": "Violence-against-children",
        "category" : ["Human rights and Democracy","Children"],
        "description" : "Percentage of children aged 1-14 years who experienced\n" +
            "physical punishment and/or psychological aggression by\n" +
            "caregivers in last month.",
        "type" : "percent",
        "csvFile": "violence-against-children.csv",
    },
    {
        "id": 95,
        "name": "People who think political parties are very corrupt",
        "category" : ["Human rights and Democracy","Corruption"],
        "description" : "Percentage of survey respondents, by country, who think political\n" +
            "parties are \"corrupt or extremely corrupt\".",
        "type" : "percent",
        "csvFile": "share-of-people-who-think-political-parties-are-very-corrupt.csv",
    },
    {
        "id": 96,
        "name": "Corruption Perception Index",
        "category" : ["Human rights and Democracy","Corruption"],
        "description" : "Transparency International's Corruption Perception Index.\n" +
            "Scores are on a scale of 0-100, where 0 means that a country\n" +
            "is perceived as highly corrupt.",
        "type" : "number",
        "csvFile": "TI-corruption-perception-index.csv",
    },
    {
        "id": 97,
        "name": "Rating of corruption perception",
        "category" : ["Human rights and Democracy","Corruption"],
        "description" : "Average of all individuals' perception ratings on a scale from 1\n" +
            "(corruption is not a problem) to 5 (corruption is a very serious problem).",
        "type" : "number",
        "csvFile": "average-rating-of-corruption-perception.csv",
    },
    {
        "id": 98,
        "name": "Bribery rates",
        "category" : ["Human rights and Democracy","Corruption"],
        "description" : "Percentage of survey respondents who report having paid\n" +
            "a bribe in the last year to access public services such as:\n" +
            "education; judiciary; medical and health; police; registry\n" +
            "and permit services; utilities; tax revenue and customs;\n" +
            "and land service.",
        "type" : "percent",
        "csvFile": "bribery-rates.csv",
    },
    {
        "id": 99,
        "name": "Elected officials",
        "category" : ["Human rights and Democracy","Democracy"],
        "description" : "Based on the expert assessments and index by V-Dem. It\n" +
            "measures the extent to which popular elections choose the\n" +
            "chief executive and the legislature. It ranges from 0 to 1 (chief\n" +
            "executive and entire legislature elected).",
        "type" : "number",
        "csvFile": "elected-officials-index.csv",
    },
    {
        "id": 100,
        "name": "Political regimes",
        "category" : ["Human rights and Democracy","Democracy"],
        "description" : "Regimes based on the classification and assessment by Boix et al.\n" +
            "(2013).",
        "type" : "text",
        "csvFile": "political-regimes.csv",
    },
    {
        "id": 101,
        "name": "Suffrage for women",
        "category" : ["Human rights and Democracy","Democracy"],
        "description" : "Universal suffrage for women",
        "type" : "number",
        "csvFile": "universal-suffrage-women.csv",
    },
    {
        "id": 102,
        "name": "Population with suffrage",
        "category" : ["Human rights and Democracy","Democracy"],
        "description" : "Share of population with suffrage",
        "type" : "percent",
        "csvFile": "suffrage.csv",
    },
    {
        "id": 103,
        "name": "Mothers guaranteed an equivalent position after maternity leave",
        "category" : ["Human rights and Democracy","Economic inequality by gender"],
        "description" : "This map plots a binary variable measuring whether employers of\n" +
            "women returning from maternity leave are legally obligated to provide\n" +
            "them with an equivalent position after maternity leave. It takes into\n" +
            "account paid and unpaid maternity.",
        "type" : "number",
        "csvFile": "are-mothers-guaranteed-an-equivalent-position-after-maternity-leave.csv",
    },
    {
        "id": 104,
        "name": "Gender equality in employment and economic benefits",
        "category" : ["Human rights and Democracy","Economic inequality by gender"],
        "description" : "The indicator is based on an assessment of the legislation addressing\n" +
            "gender quality in terms of employment and economic benefits.",
        "type" : "number",
        "csvFile": "gender-equality-in-employment-and-economic-benefits.csv",
    },
    {
        "id": 105,
        "name": "Law mandate equal pay",
        "category" : ["Human rights and Democracy","Economic inequality by gender"],
        "description" : "Measures whether there is a law that makes it obligatory for employers\n" +
            "to equally remunerate male and female employees who do work of\n" +
            "equal value.",
        "type" : "number",
        "csvFile": "law-mandate-equal-pay.csv",
    },
    {
        "id": 106,
        "name": "Unemployment women",
        "category" : ["Human rights and Democracy","Economic inequality by gender"],
        "description" : "The unemployment rate expresses the number of unemployed as a percent of the labour force. All figures correspond to\n" +
            "'modelled ILO estimates' (see source for details).",
        "type" : "percent",
        "csvFile": "unemployment-rate-women.csv",
    },
    {
        "id": 107,
        "name": "Countries with gender-equal inheritance",
        "category" : ["Human rights and Democracy","Economic inequality by gender"],
        "description" : "Figure distinguishes between the countries that have gender-equal\n" +
            "inheritance for women, and those which do not.",
        "type" : "number",
        "csvFile": "map-gender-equal-inheritance.csv",
    },
    {
        "id": 108,
        "name": "Gender rights to property",
        "category" : ["Human rights and Democracy","Economic inequality by gender"],
        "description" : "Ownership rights covers the ability to manage, control, administer, access,\n" +
            "encumber, receive, dispose of, and transfer property.",
        "type" : "number",
        "csvFile": "gender-rights-to-property.csv",
    },
    {
        "id": 109,
        "name": "Human right protection",
        "category" : ["Human rights and Democracy","Human rights"],
        "description" : "The scores capture the extent to which citizens' physical integrity is protected from government killings, torture, political imprisonments,\n" +
            "extrajudicial executions, mass killings and disappearances. Higher scores mean fewer such abuses.",
        "type" : "number",
        "csvFile": "human-rights-protection.csv",
    },
    {
        "id": 110,
        "name": "Freedom of association",
        "category" : ["Human rights and Democracy","Human rights"],
        "description" : "Based on the expert assessments and index by V-Dem. It captures the extent to which parties and civil society\n" +
            "organizations can form and operate freely. It ranges from 0 to 1 (most free).",
        "type" : "numbers",
        "csvFile": "freedom-of-association.csv",
    },
    {
        "id": 111,
        "name": "Civil liberties",
        "category" : ["Human rights and Democracy","Human rights"],
        "description" : "Based on the expert assessments and index by V-Dem. It captures the extent to which citizens enjoy physical integrity\n" +
            "rights, freedoms of religion, of movement, and from forced labor, as well as access to justice, laws are transparent and\n" +
            "public administration is impartial.",
        "type" : "numbers",
        "csvFile": "civil-liberties.csv",
    },
    {
        "id": 112,
        "name": "Military spending per capita",
        "category" : ["War","Military"],
        "description" : "Military expenditure per capita is expressed in constant 2019 US$. This data aims to include all spending on current military forces and activities.\n" +
            "\n",
        "type" : "number",
        "csvFile": "military-spending-per-capita.csv",
    },
    {
        "id": 113,
        "name": "Military personnel",
        "category" : ["War","Military"],
        "description" : "Number of troops under the command of the national\n" +
            "government, intended for use against foreign adversaries,\n" +
            "and held ready for combat as of 1 January of the given\n" +
            "year.",
        "type" : "number",
        "csvFile": "military-personnel.csv",
    },
    {
        "id": 114,
        "name": "Worried about terrorism",
        "category" : ["War","Terrorism"],
        "description" : "Respondents were asked, \"To what degree are you worried about the\n" +
            "following situations? A terrorist attack\". The share of people who said\n" +
            "they were worried is the sum of those who said \"very much\" or \"a great\n" +
            "deal\".",
        "type" : "percent",
        "csvFile": "worried-about-terrorism.csv",
    },
    {
        "id": 115,
        "name": "Terrorist incidents",
        "category" : ["War","Terrorism"],
        "description" : "The source defines a terrorist attack as: \"the threatened or\n" +
            "actual use of illegal force and violence by a non-state actor\n" +
            "to attain a political, economic, religious, or social goal\n" +
            "through fear, coercion, or intimidation.\" The perpetrators of\n" +
            "the incidents must be sub-national actors; data does not\n" +
            "include acts of state terrorism.",
        "type" : "number",
        "csvFile": "terrorist-incidents.csv",
    },
    {
        "id": 116,
        "name": "Terrorism percent deaths",
        "category" : ["War","Terrorism"],
        "description" : "Deaths from terrorist attacks given as a share of total deaths (from all\n" +
            "causes) in any given year.",
        "type" : "percent",
        "csvFile": "terrorism-percent-deaths.csv",
    },
    {
        "id": 117,
        "name": "Deaths conflict terrorism per 100k",
        "category" : ["War","Terrorism"],
        "description" : "Annual number of deaths from conflict and terrorism per 100,000\n" +
            "residents of all ages and both sexes.",
        "type" : "number",
        "csvFile": "deaths-conflict-terrorism-per-100000.csv",
    },
    {
        "id": 118,
        "name": "Homicide rate",
        "category" : ["War","Homicide"],
        "description" : "Homicide rate is measured as the number of homicide deaths per 100,000 people.",
        "type" : "number",
        "csvFile": "homicide-rate.csv",
    },
    {
        "id": 119,
        "name": "Homicide rates from firearms",
        "category" : ["War","Homicide"],
        "description" : "Homicide rate from firearms, measured as the number of deaths per\n" +
            "100,000.",
        "type" : "number",
        "csvFile": "homicide-rates-from-firearms.csv",
    },
    {
        "id": 120,
        "name": "Number of homicide deaths",
        "category" : ["War","Homicide"],
        "description" : "Annual number of deaths from interpersonal violence, measured\n" +
            "across all ages and both sexes.",
        "type" : "number",
        "csvFile": "number-of-homicide-deaths.csv",
    }
]
export default Data;