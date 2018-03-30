export interface WatsonSessionModel{
  result: string;
  data: {
    errorMessage?: string;
    session_id?: string;
    validate_grammar?: string;
    observe_result?: string;
    new_session_uri?: string;
    recognize?:string;
    recognizeWS?: string;

  }
}
