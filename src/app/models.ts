export interface FlightsApiData{
  pagination:{
    limit: number,
    offset: number,
    count: number,
    total: number
  },
  data: Flight[]
}

export interface Flight {
  flight_date: string; // Date du vol
  flight_status: string; // Statut du vol (ex: actif)

  departure: Departure; // Informations de départ
  arrival: Arrival; // Informations d'arrivée

  airline: Airline; // Informations sur la compagnie aérienne
  flight: FlightDetails; // Informations sur le vol
  aircraft?: Aircraft; // Informations sur l'avion (optionnel)
  live?: LiveFlightData; // Données en direct (optionnel)
}

export interface Departure {
  airport: string; // Nom de l'aéroport
  timezone: string; // Fuseau horaire
  iata: string; // Code IATA de l'aéroport
  icao: string; // Code ICAO de l'aéroport
  terminal?: string; // Terminal (optionnel)
  gate?: string; // Porte d'embarquement (optionnel)
  delay?: number; // Délai en minutes (optionnel)
  scheduled: string; // Heure prévue
  estimated?: string; // Heure estimée (optionnel)
  actual?: string; // Heure réelle de départ (optionnel)
  estimated_runway?: string; // Heure estimée sur la piste (optionnel)
  actual_runway?: string; // Heure réelle sur la piste (optionnel)
}

export interface Arrival {
  airport: string; // Nom de l'aéroport
  timezone: string; // Fuseau horaire
  iata: string; // Code IATA de l'aéroport
  icao: string; // Code ICAO de l'aéroport
  terminal?: string; // Terminal (optionnel)
  gate?: string; // Porte d'arrivée (optionnel)
  baggage?: string; // Zone de récupération des bagages (optionnel)
  delay?: number | null; // Délai en minutes (optionnel)
  scheduled: string; // Heure prévue d'arrivée
  estimated?: string; // Heure estimée (optionnel)
  actual?: string | null; // Heure réelle d'arrivée (optionnel)
  estimated_runway?: string | null; // Heure estimée sur la piste (optionnel)
  actual_runway?: string | null; // Heure réelle sur la piste (optionnel)
}

export interface Airline {
  name: string; // Nom de la compagnie aérienne
  iata: string; // Code IATA de la compagnie
  icao: string; // Code ICAO de la compagnie
}

export interface FlightDetails {
  number: string; // Numéro de vol
  iata: string; // Code IATA du vol
  icao: string; // Code ICAO du vol
  codeshared?: any; // Vol partagé (optionnel)
}

export interface Aircraft {
  registration: string; // Immatriculation de l'avion
  iata: string; // Code IATA de l'appareil
  icao: string; // Code ICAO de l'appareil
  icao24: string; // Code ICAO24 de l'appareil
}

export interface LiveFlightData {
  updated: string; // Dernière mise à jour
  latitude: number; // Latitude actuelle
  longitude: number; // Longitude actuelle
  altitude: number; // Altitude actuelle
  direction: number; // Direction (cap en degrés)
  speed_horizontal: number; // Vitesse horizontale (en km/h)
  speed_vertical: number; // Vitesse verticale (en m/s)
  is_ground: boolean; // Indique si l'appareil est au sol
}
