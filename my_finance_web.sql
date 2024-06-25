--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tb_transaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_transaction (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    description character varying NOT NULL,
    value integer NOT NULL,
    date date NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    transaction_type_id uuid
);


ALTER TABLE public.tb_transaction OWNER TO postgres;

--
-- Name: tb_transaction_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tb_transaction_type (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    description character varying NOT NULL,
    type character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    deleted_at timestamp without time zone
);


ALTER TABLE public.tb_transaction_type OWNER TO postgres;

--
-- Data for Name: tb_transaction; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tb_transaction (id, description, value, date, "createdAt", "deletedAt", transaction_type_id) FROM stdin;
36fffb35-0fea-4e43-b296-8a13be8ecbbb	Salário	50	2024-06-23	2024-06-23 19:22:07.441657	\N	7facfdb2-d696-4a34-bac5-22d029d2b0bb
\.


--
-- Data for Name: tb_transaction_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tb_transaction_type (id, description, type, created_at, deleted_at) FROM stdin;
7facfdb2-d696-4a34-bac5-22d029d2b0bb	Apto Aluguel	R	2024-06-23 19:20:15.292587	\N
\.


--
-- Name: tb_transaction PK_60ebc65df88c25409fc36c958f9; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_transaction
    ADD CONSTRAINT "PK_60ebc65df88c25409fc36c958f9" PRIMARY KEY (id);


--
-- Name: tb_transaction_type PK_9ca0a64db067fbfdefc7a8cb4c7; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_transaction_type
    ADD CONSTRAINT "PK_9ca0a64db067fbfdefc7a8cb4c7" PRIMARY KEY (id);


--
-- Name: tb_transaction FK_fda9bdce92574458ccaf5ef22ec; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tb_transaction
    ADD CONSTRAINT "FK_fda9bdce92574458ccaf5ef22ec" FOREIGN KEY (transaction_type_id) REFERENCES public.tb_transaction_type(id) ON UPDATE RESTRICT ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

