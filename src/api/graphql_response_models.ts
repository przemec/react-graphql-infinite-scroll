export interface launch {
  id: string;
  rocket: {
    rocket_name: string;
  };
  mission_name: string;
  launch_success: boolean;
  launch_date_utc: string;
  details: string;
  links: {
    flickr_images: string[];
  };
}

export interface past_launches_response {
  launchesPast: launch[];
}
